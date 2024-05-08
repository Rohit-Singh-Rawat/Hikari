import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { env } from 'hono/adapter';



const prisma = new PrismaClient({
	datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate());
