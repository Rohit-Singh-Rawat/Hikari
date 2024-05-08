import { Hono } from 'hono';

const blog = new Hono();

blog.post('/').put('/').get('/:id').get('/bulk');

export default blog;
