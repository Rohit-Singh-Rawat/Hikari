import { Hono } from 'hono';
import router from './routes/common.routes';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
	};
}>();
app.route('/api/v1', router);

export default app;
	