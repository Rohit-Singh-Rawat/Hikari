import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { verify } from 'hono/jwt';
type Variables = {
	user: {
		id?: string;
		username:string;
		FullName:string;
		email:string
	};
};
const blog = new Hono<{
	Bindings: {
		DATABASE_URL: string;
	};
	Variables: Variables;
}>();
blog.use('/*', async (c, next) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());
	const jwtToken = c.req.header('Authorization')?.replace(' Bearer ', '');
	if (!jwtToken) {
		c.status(401);
		return c.json({ error: 'unauthorized' });
	}

	const payload = await verify(jwtToken, c.env.DATABASE_URL);

	if (!(payload && payload.id)) {
		c.status(401);
		return c.json({ error: 'unauthorized' });
	}
	const user = await prisma.user.findUnique({
		where: { id: payload.id },
		select: {
			id: true,
			username: true,
			FullName: true,
			email: true,
		},
	});

	c.set('user', user);
});
blog.post('/').put('/').get('/:id').get('/bulk');

export default blog;
