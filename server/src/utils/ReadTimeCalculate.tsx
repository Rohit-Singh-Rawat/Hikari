interface BlogContent {
	content: string;
	heading: string;
	imageCount?: number;
}

export function calculateReadTime(blog: BlogContent, averageSpeed: number = 200): number {
	const readingSpeed: number = averageSpeed;
	const wordCount = blog.content.split(' ').length;
	const headingCount = blog.heading.split(' ').length;
	let readTimeMinutes: number = wordCount / readingSpeed;

	readTimeMinutes += headingCount * 0.5;
	readTimeMinutes += (blog.imageCount || 0) * 0.25;

	const roundedReadTime: number = Math.ceil(readTimeMinutes);

	return roundedReadTime;
}
