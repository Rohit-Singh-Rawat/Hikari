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
app.use('/*', cors());

app.route('/api/v1', router);
export default app;
