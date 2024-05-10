import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { verify } from 'hono/jwt';

type Variables = {
	userId: string;
};

const blog = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: Variables;
}>();

blog.use('/*', async (c, next) => {
	const jwtToken = c.req.header('Authorization')?.replace('Bearer ', '');
	
	if (!jwtToken) {
		c.status(401);
		return c.json({ error: 'unauthorized' });
	}
	try {
		const payload = await verify(jwtToken, c.env.JWT_SECRET);

		if (!(payload && payload.userId)) {
			c.status(401);
			return c.json({ error: 'unauthorized' });
		}
		 c.set('userId', payload.userId);
		 
		await next()
	} catch (error) {
		c.status(401);
		return c.json({ error: 'unauthorized' });
	}
});

blog
	.post('/', async (c) => {
		const userId = c.get('userId');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		
		const body  = await c.req.json();
		
		try {
			const blog = await prisma.blog.create({
				data: {
					title: body.title,
					content: body.content,
					authorId: userId,
					published: body.published || false,
				},
			});
			
			return c.json({
				id: blog.id,
			});
		} catch (error) {
			c.status(400);
			c.json({
				msg: 'user does not exist or failed to make blog',
			});
		}
	})
	.put('/', async (c) => {
		const userId = c.get('userId');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		const body  = await c.req.json();
		try {
			const blog = await prisma.blog.update({
				where: { id: body.id, authorId: userId },
				data: {
					title: body.title,
					content: body.content,
				},
			});
			return c.json({
				id: blog.id,
			});
		} catch (error) {
			c.status(400);
			c.json({
				msg: 'author does not exist  or failed to update blog',
			});
		}
	})
	.get('/bulk', async (c) => {
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		try {
			const blogs = await prisma.blog.findMany({
				where: { published: true },
			});
			return c.json({
				blogs: blogs,
			});
		} catch (error) {
			c.status(400);
			c.json({
				msg: 'failed to fetch blogs',
			});
		}
	})
	.get('/:id', async (c) => {
		const userId = c.get('userId');
		const blogId = c.req.param('id');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		try {
			const blog = await prisma.blog.findUnique({
				where: { published: true, id: blogId },
			});
			return c.json({
				blog: blog,
			});
		} catch (error) {
			c.status(400);
			c.json({
				msg: 'failed to fetch blog or blog not exist',
			});
		}
	});

export default blog;
