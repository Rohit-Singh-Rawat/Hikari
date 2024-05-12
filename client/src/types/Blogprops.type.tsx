export type BlogPropsType = {
	id: string;
	publishedOn: Date;
	content: string;
	heading: string;
	reads: number;
	imgUrl?: string;
	author: {
		id: string;
		name: string;
		avatarUrl: string;
	};
};
