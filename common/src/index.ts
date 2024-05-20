import z from 'zod';

export enum Category {
	LIFESTYLE = 'lifestyle',
	TECHNOLOGY = 'technology',
	FASHION = 'fashion',
	FOOD_AND_COOKING = 'food_and_cooking',
	FINANCE_AND_BUSINESS = 'finance_and_business',
	TRAVEL = 'travel',
	PARENTING = 'parenting',
	DIY_AND_CRAFTS = 'diy_and_crafts',
	SELF_IMPROVEMENT = 'self_improvement',
	ENTERTAINMENT = 'entertainment',
	OTHERS = 'others',
}

export const signupInput = z.object({
	email: z.string().email(),
	password: z
		.string()
		.trim()
		.regex(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
			'Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and special characters are allowed'
		),
	username: z
		.string()
		.regex(
			/^(?=.{1,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
			'1-20 chars, starts/ends with letter/number, contains letters, numbers, _, ., no consecutive _, .'
		),
	FullName: z.string().trim().min(1).max(100).optional(),
});

export type SignupType = z.infer<typeof signupInput>;

export const signinInput = z.object({
	ValidityState: z.string(),
	password: z.string().trim().min(8),
});

export type SigninType = z.infer<typeof signinInput>;

export const createBlogInput = z.object({
	title: z.string().trim().min(1),
	content: z.string().trim().min(1),
	category: z.nativeEnum(Category).optional(),
	published: z.boolean().optional(),
});

export type CreateBlogType = z.infer<typeof createBlogInput>;

export const updateBlogInput = z.object({
	title: z.string().trim().min(1).optional(),
	content: z.string().trim().min(1).optional(),
	category: z.nativeEnum(Category).optional(),
	published: z.boolean().optional(),
});

export type UpdateBlogType = z.infer<typeof updateBlogInput>;
