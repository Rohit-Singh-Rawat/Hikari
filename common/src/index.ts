import z from 'zod';

export const signupInput = z.object({
	email: z.string().email(),
	password: z
		.string()
		.trim()
		.regex(
			/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
			'Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and special characters are allowed'
		),
	username: z.string().trim().min(1).max(30),
	FullName: z.string().trim().min(1).max(100).optional(),
});

export type SignupType = z.infer<typeof signupInput>;

export const signinInput = z.object({
	email: z.string().email(),
	password: z.string().trim().min(8),
});

export type SigninType = z.infer<typeof signinInput>;

export const createBlogInput = z.object({
	title: z.string().trim().min(1),
	content: z.string().trim().min(1),
});

export type CreateBlogType = z.infer<typeof createBlogInput>;

export const updateBlogInput = z.object({
	title: z.string().trim().min(1).optional(),
	content: z.string().trim().min(1).optional(),
});

export type UpdateBlogType = z.infer<typeof updateBlogInput>;
