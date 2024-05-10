import { Hono } from 'hono';
import user from './user.routes';
import blog from './blog.routes';

const router = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
}>();

router.route('/user', user)
router.route('/blog', blog)

export default router;
