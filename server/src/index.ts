import { Hono } from 'hono';
import router from './routes/common.routes';
import { PrismaClient } from '@prisma/client/extension';
import { withAccelerate } from '@prisma/extension-accelerate';
import { cors } from 'hono/cors';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
}>();
app.use(
	'/*',
	cors({
		origin: 'https://hikari-zeta.vercel.app',
		allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
		allowMethods: ['POST', 'GET', 'OPTIONS'],
		exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
		maxAge: 600,
		credentials: true,
	})
);

app.route('/api/v1', router);
export default app;
