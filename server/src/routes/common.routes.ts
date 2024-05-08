import { Hono } from 'hono';
import user from './user.routes';
import blog from './blog.routes';

const router = new Hono();

router.route('/user', user)
router.route('/blog', blog)

export default router;
