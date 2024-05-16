import { categories } from "../constants/category";

export type BlogPropsType = {
	id: string;
	publishedOn: Date;
	content: string;
	heading: string;
	reads: number;
	category?: keyof typeof categories;
	author: {
		id: string;
		name: string;
		avatarUrl: string;
	};
};