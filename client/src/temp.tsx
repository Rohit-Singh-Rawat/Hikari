// Import the BlogPropsType type
const cloudinaryUrl =
	'https://res.cloudinary.com/ytx/image/upload/v1715095202/foyp0xkxkwntfusvulas.jpg';

const blogs = [
	{
		id: '1',
		publishedOn: new Date('2024-1-01'),
		content:
			'Lorem ipsum dolor sit amet...Lorem ipsum dolor sitm ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum doloLorem ipsum dolo',
		heading:
			'Blog Heading 1Blog Heading 1Blog Heading 1Blog Heading 1Blog Heading 1Blog Heading 1Blog Heading 1Blog Heading 1Blog Heading 1Blog Heading 1',
		reads: 100,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author1',
			name: 'John Doe',
			avatarUrl: cloudinaryUrl,
		},
	},
	{
		id: '2',
		publishedOn: new Date('2024-05-02'),
		content: 'Lorem ipsum dolor sit amet...',
		heading: 'Blog Heading 2',
		reads: 200,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author2',
			name: 'Jane Smith',
			avatarUrl: cloudinaryUrl,
		},
	},
	// Add more blog objects here...
	{
		id: '3',
		publishedOn: new Date('2024-05-03'),
		content: 'Lorem ipsum dolor sit amet...',
		heading: 'Blog Heading 3',
		reads: 300,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author3',
			name: 'Alice Johnson',
			avatarUrl: cloudinaryUrl,
		},
	},
	{
		id: '4',
		publishedOn: new Date('2024-05-04'),
		content: 'Lorem ipsum dolor sit amet...',
		heading: 'Blog Heading 4',
		reads: 400,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author4',
			name: 'Bob Anderson',
			avatarUrl: cloudinaryUrl,
		},
	},
	// Add 10 more blog objects...
	{
		id: '5',
		publishedOn: new Date('2024-05-05'),
		content: 'Lorem ipsum dolor sit amet...',
		heading: 'Blog Heading 5',
		reads: 500,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author5',
			name: 'Emma Wilson',
			avatarUrl: cloudinaryUrl,
		},
	},
	{
		id: '6',
		publishedOn: new Date('2024-05-06'),
		content: 'Lorem ipsum dolor sit amet...',
		heading: 'Blog Heading 6',
		reads: 600,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author6',
			name: 'Michael Brown',
			avatarUrl: cloudinaryUrl,
		},
	},
	{
		id: '7',
		publishedOn: new Date('2024-05-07'),
		content: 'Lorem ipsum dolor sit amet...',
		heading: 'Blog Heading 7',
		reads: 700,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author7',
			name: 'Sophia Lee',
			avatarUrl: cloudinaryUrl,
		},
	},
	{
		id: '8',
		publishedOn: new Date('2024-05-08'),
		content: 'Lorem ipsum dolor sit amet...',
		heading: 'Blog Heading 8',
		reads: 800,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author8',
			name: 'William Martinez',
			avatarUrl: cloudinaryUrl,
		},
	},
	{
		id: '9',
		publishedOn: new Date('2024-05-09'),
		content: 'Lorem ipsum dolor sit amet...',
		heading: 'Blog Heading 9',
		reads: 900,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author9',
			name: 'Olivia Taylor',
			avatarUrl: cloudinaryUrl,
		},
	},
	{
		id: '10',
		publishedOn: new Date('2024-05-10'),
		content: 'Lorem ipsum dolor sit amet...',
		heading: 'Blog Heading 10',
		reads: 1000,
		imgUrl: cloudinaryUrl,
		author: {
			id: 'author10',
			name: 'James Johnson',
			avatarUrl: cloudinaryUrl,
		},
	},
];

export default blogs;
