import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { createBlogInput, updateBlogInput } from '@whale_in_space/hikari-common';
import { Hono } from 'hono';
import { verify } from 'hono/jwt';
import { calculateReadTime } from '../utils/ReadTimeCalculate';
import { getContentFromObjects } from '../utils/generateContent';

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

	console.log('object');
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

		await next();
	} catch (error) {
		c.status(401);
		return c.json({ error: 'unauthorized' });
	}
});

blog
	.post('/create', async (c) => {
		const userId = c.get('userId');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());

		const body = await c.req.json();
		const { success, error } = createBlogInput.safeParse(body);
		if (!success) {
			c.status(411);
			return c.json({
				msg: error || 'Inputs are wrong',
			});
		}

		const content = getContentFromObjects(JSON.parse(body.content));
		try {
			const blog = await prisma.blog.create({
				data: {
					title: body.title,
					content: body.content,
					authorId: userId,
					readTime: calculateReadTime({ heading: body.title, content: content }),
					reads: 0,
					excerpt: content.slice(0, 400),
					category: body.category || null,
					published: body.published || false,
				},
			});
			return c.json({
				id: blog.id,
			});
		} catch (error) {
			c.status(400);
			return c.json({
				msg: 'user does not exist or failed to make blog',
			});
		}
	})
	.post('/publish/:id', async (c) => {
		const userId = c.get('userId');

		const blogId = c.req.param('id');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		try {
			const blog = await prisma.blog.update({
				where: { id: blogId, authorId: userId },
				data: { published: true },
			});
			return c.json({
				id: blog.id,
			});
		} catch (error) {
			c.status(400);
			return c.json({
				msg: 'author does not exist  or failed to publish blog',
			});
		}
	})
	.put('/', async (c) => {
		const userId = c.get('userId');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		const body = await c.req.json();
		const { success, error } = updateBlogInput.safeParse(body);
		if (!success) {
			c.status(411);
			return c.json({
				msg: error || 'Inputs are wrong',
			});
		}
		const content = getContentFromObjects(JSON.parse(body.content));
		try {
			const blog = await prisma.blog.update({
				where: { id: body.id, authorId: userId },
				data: {
					title: body.title,
					content: body.content,
					readTime: calculateReadTime({ heading: body.title, content: content }),
					excerpt: content.slice(0, 400),
					category: body.category || null,
				},
			});
			console.log(blog.excerpt);
			return c.json({
				id: blog.id,
			});
		} catch (error) {
			c.status(400);
			return c.json({
				msg: 'author does not exist  or failed to update blog',
			});
		}
	})
	.delete('/:id', async (c) => {
		const userId = c.get('userId');

		const blogId = c.req.param('id');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());

		try {
			const blog = await prisma.blog.delete({
				where: { id: blogId, authorId: userId },
			});
			return c.json({
				id: blog.id,
			});
		} catch (error) {
			c.status(400);
			return c.json({
				msg: 'only author can delete or failed to delete blog',
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
				select: {
					author: {
						select: {
							id: true,
							username: true,
							FullName: true,
						},
					},
					category: true,
					excerpt: true,
					publishedOn: true,
					id: true,
					reads: true,
					title: true,
					readTime: true,
				},
				orderBy: [{ reads: 'desc' }, { publishedOn: 'desc' }, { readTime: 'asc' }],
			});
			return c.json({
				blogs: blogs,
			});
		} catch (error) {
			c.status(400);
			return c.json({
				msg: 'failed to fetch blogs',
			});
		}
	})
	.get('/:id/edit', async (c) => {
		const userId = c.get('userId');
		const blogId = c.req.param('id');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		try {
			const blog = await prisma.blog.findUnique({
				where: { authorId: userId, id: blogId },
			});
			if (!blog) {
				c.status(403);
				return c.json({
					error: 'blog not found',
				});
			}
			return c.json({
				blog: blog,
			});
		} catch (error) {
			c.status(400);
			return c.json({
				msg: 'failed to fetch blog or blog not exist',
			});
		}
	})

	.get('/search', async (c) => {
		const query = c.req.query('q');
		const searchQuery = (query?.split(' ') || []).join(' | ');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		console.log(searchQuery);
		if (!query) return;
		try {
			const blogs = await prisma.blog.findMany({
				where: {
					published: true,
					OR: [
						{
							title: {
								search: searchQuery,
							},
						},
						{
							content: {
								search: searchQuery,
							},
						},
					],
				},
				orderBy: {
					_relevance: {
						fields: ['title', 'content'],
						search: searchQuery,
						sort: 'asc',
					},
				},
				select: {
					author: {
						select: {
							id: true,
							username: true,
							FullName: true,
						},
					},
					excerpt: true,
					content: true,
					publishedOn: true,
					id: true,
					reads: true,
					title: true,
					readTime: true,
				},
			});
			return c.json({
				blogs: blogs,
			});
		} catch (error) {
			c.status(400);
			return c.json({
				msg: 'failed to fetch blog or blog not exist',
			});
		}
	})
	.get('/stories', async (c) => {
		const userId = c.get('userId');
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		try {
			const blogs = await prisma.blog.findMany({
				where: { authorId: userId },
				select: {
					author: {
						select: {
							id: true,
							username: true,
							FullName: true,
						},
					},
					category: true,
					excerpt: true,
					publishedOn: true,
					id: true,
					published: true,
					reads: true,
					title: true,
					readTime: true,
				},
			});

			return c.json({
				blogs: blogs,
			});
		} catch (error) {
			c.status(400);
			return c.json({
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
				select: {
					author: {
						select: {
							id: true,
							username: true,
							FullName: true,
						},
					},
					category: true,
					content: true,
					publishedOn: true,
					id: true,
					reads: true,
					title: true,
					readTime: true,
				},
			});
			if (!blog) {
				c.status(403);
				return c.json({
					error: 'blog not found',
				});
			}
			const updatedBlog = await prisma.blog.update({
				where: { id: blogId },
				data: { reads: blog.reads + 1 },
				select: {
					reads: true,
				},
			});
			return c.json({
				blog: blog,
			});
		} catch (error) {
			c.status(400);
			return c.json({
				msg: 'failed to fetch blog or blog not exist',
			});
		}
	});
export default blog;
