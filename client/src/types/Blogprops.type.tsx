import { categories } from '../constants/category';

export type BlogPropsType = {
	id: string;
	publishedOn: Date;
	excerpt: string;
	readTime: number;
	title: string;
	reads: number;
	
	category?: keyof typeof categories;
	author: {
		id: string;
		username: string;
		FullName: string;
		email: string;
	};
};
