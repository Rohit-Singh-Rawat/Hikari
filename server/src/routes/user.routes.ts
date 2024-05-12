import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signinInput, signupInput } from '@whale_in_space/story-common';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';

type Bindings = {
	DATABASE_URL: string;
	JWT_SECRET: string;
};

const user = new Hono<{
	Bindings: Bindings;
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
			console.log(error)
			return c.json({
				msg: error || 'Inputs are wrong',
			});
		}
		console.log('object');
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

				console.log("ji")
			const newUser = await prisma.user.create({
				data: {
					avatar:'',
					email: body.email,
					FullName: body.FullName,
					username: body.username,
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
			console.log(error)
			return c.status(403);
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
			return c.json({
				msg: error || 'Inputs are wrong',
			});
		}

		try {
			const user = await prisma.user.findUnique({
				where: {
					email: body.email,
				},
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

export default user;
