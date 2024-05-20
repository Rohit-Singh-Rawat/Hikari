import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signinInput, signupInput } from '@whale_in_space/hikari-common';
import { Hono } from 'hono';
import { sign, verify } from 'hono/jwt';
type Bindings = {
	DATABASE_URL: string;
	JWT_SECRET: string;
};
type Variables = {
	userId: string;
};

const user = new Hono<{
	Bindings: Bindings;
	Variables: Variables;
}>();

user
	.post('/signup', async (c) => {
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());

		const body = await c.req.json();

		const { success, error } = signupInput.safeParse(body);
		if (!success) {
			c.status(411);
			return c.json({ error: error.errors[0].message || 'Invalid Inputs' });
		}
		try {
			const salt = crypto.getRandomValues(new Uint8Array(16));

			const passwordBuffer = new TextEncoder().encode(body.password);

			const data = new Uint8Array([...passwordBuffer, ...salt]);

			const hashBuffer = await crypto.subtle.digest('SHA-256', data);

			const hashHex = Array.from(new Uint8Array(hashBuffer))
				.map((byte) => byte.toString(16).padStart(2, '0'))
				.join('');

			const saltHex = Array.from(salt)
				.map((byte) => byte.toString(16).padStart(2, '0'))
				.join('');

			const newUser = await prisma.user.create({
				data: {
					email: body.email.toLowerCase(),
					FullName: body.FullName,
					username: body.username.toLowerCase(),
					salt: saltHex,
					password: hashHex,
				},
			});

			const token = await sign(
				{ userId: newUser.id, username: newUser.username },
				c.env.JWT_SECRET
			);

			return c.json({
				jwt: token,
			});
		} catch (error) {
			c.status(403);
			return c.json({ error:'User Already Exist with username or Email' });
		}
	})

	.post('/signin', async (c) => {
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		const body = await c.req.json();
		const { success, error } = signinInput.safeParse(body);
		if (!success) {
			c.status(411);
			return c.json({error:error.errors[0].message || 'Invalid Inputs'});
			
		}

		try {
			const user = await prisma.user.findFirst({
				where: {
					OR: [{ email: body.ValidityState }, { username: body.ValidityState }],
				} ,
			});
			if (!user) {
				c.status(403);
				return c.json({
					error: 'user not found',
				});
			}

			const passwordBuffer = new TextEncoder().encode(body.password);

			const saltMatch = user?.salt?.match(/.{1,2}/g);
			const salt = saltMatch
				? new Uint8Array(saltMatch.map((byte) => parseInt(byte, 16)))
				: undefined;

			if (!salt) {
				c.status(403);
				return c.json({
					error: 'something went wrong will saving the password',
				});
			}
			const data = new Uint8Array([...passwordBuffer, ...salt]);

			const hashBuffer = await crypto.subtle.digest('SHA-256', data);

			const hashHex = Array.from(new Uint8Array(hashBuffer))
				.map((byte) => byte.toString(16).padStart(2, '0'))
				.join('');
			if (user.password !== hashHex) {
				c.status(403);
				return c.json({
					error: 'invalid password',
				});
			}
			const token = await sign({ userId: user.id, username: user.username }, c.env.JWT_SECRET);

			return c.json({
				jwt: token,
			});
		} catch (error) {
			return c.status(403);
		}
	});

user.get(
	'/me',
	async (c, next) => {
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

			await next();
		} catch (error) {
			c.status(401);
			return c.json({ error: 'unauthorized' });
		}
	},
	async (c) => {
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());

		try {
			const user = await prisma.user.findUnique({
				where: {
					id: c.get('userId'),
				},
				select: {
					id: true,
					username: true,
					email: true,
					FullName: true,
				},
			});
			if (!user) {
				c.status(403);
				return c.json({
					error: 'user not found',
				});
			}

			return c.json({ user, message: 'ok' });
		} catch (error) {
			return c.status(403);
		}
	}
);
user.get(
	'/profile/:username',
	async (c, next) => {
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

			await next();
		} catch (error) {
			c.status(401);
			return c.json({ error: 'unauthorized' });
		}
	},
	async (c) => {
		const prisma = new PrismaClient({
			datasourceUrl: c.env.DATABASE_URL,
		}).$extends(withAccelerate());
		const username = c.req.param('username');
		try {
			const user = await prisma.user.findUnique({
				where: {
					username: username,
				},
				select: {
					id: true,
					username: true,
					email: true,
					FullName: true,
					blogs: {
						select: {
							id: true,
							title: true,
							publishedOn: true,
							reads: true,
							readTime: true,
							category: true,
							excerpt: true,
						},
						where: {
							published: true,
						},
					},
				},
			});
			if (!user) {
				c.status(403);
				return c.json({
					error: 'user not found',
				});
			}

			return c.json({ user, message: 'ok' });
		} catch (error) {
			return c.status(403);
		}
	}
);
export default user;
