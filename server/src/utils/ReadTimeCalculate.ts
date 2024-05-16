interface BlogContent {
	content: string;
	heading: string;
}

export function calculateReadTime(blog: BlogContent, averageSpeed: number = 200): number {
	const readingSpeed: number = averageSpeed;
	const wordCount = blog.content.split(' ').length;
	const headingCount = blog.heading.split(' ').length;
	let readTimeMinutes: number = wordCount / readingSpeed;


	const roundedReadTime: number = Math.ceil(readTimeMinutes);

	return roundedReadTime;
}
