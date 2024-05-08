import { Hono } from 'hono';

const user = new Hono();

user.post('/signup').post('/signin');

export default user;
