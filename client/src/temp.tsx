const blogs = [
	{
		id: '1',
		publishedOn: new Date('2024-05-01'),
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend dui, in fermentum libero. Ut id efficitur purus. Nullam ac purus nec sapien fermentum vehicula. Cras condimentum risus a nulla fermentum, eget commodo urna convallis.',
		heading: '10 Tips for a Healthier Lifestyle',
		reads: 100,
		category: 'lifestyle',
		author: {
			id: 'author1',
			name: 'John Doe',
		},
	},
	{
		id: '2',
		publishedOn: new Date('2024-05-02'),
		content:
			'Duis lacinia velit nec arcu sodales, a consequat urna pellentesque. Fusce vel elit lectus. Mauris ut orci nec eros tempus accumsan. Sed viverra tincidunt est, nec sodales mi ultrices nec. Integer dignissim ut tortor eu interdum.',
		heading: 'The Latest Technological Advancements',
		reads: 200,
		category: 'technology',
		author: {
			id: 'author2',
			name: 'Jane Smith',
		},
	},
	{
		id: '3',
		publishedOn: new Date('2024-05-03'),
		content:
			'Donec vitae ullamcorper sapien. Vivamus ultricies tellus non dolor iaculis, nec gravida ipsum scelerisque. Morbi sed ex nec magna interdum efficitur. Cras semper volutpat arcu, nec volutpat velit scelerisque non.',
		heading: 'The Fashion Trends of the Season',
		reads: 300,
		category: 'fashion',
		author: {
			id: 'author3',
			name: 'Alice Johnson',
		},
	},
	// Add more blog objects here...
	{
		id: '4',
		publishedOn: new Date('2024-05-04'),
		content:
			'Vestibulum in est vel nunc tincidunt ultrices. Nulla at lacus lacinia, bibendum dui ut, fermentum justo. Quisque sit amet suscipit enim, nec fringilla turpis. Vivamus nec justo nec eros dignissim finibus a in enim.',
		heading: 'The Art of Cooking: Delicious Recipes to Try',
		reads: 400,
		category: 'foodAndCooking',
		author: {
			id: 'author4',
			name: 'Bob Anderson',
		},
	},
	// Add more blog objects here...
	{
		id: '5',
		publishedOn: new Date('2024-05-05'),
		content:
			'Maecenas at convallis leo. Cras nec accumsan libero. Fusce fringilla, justo vel maximus vestibulum, quam elit auctor est, eget feugiat purus leo sed justo. Integer luctus vestibulum aliquam.',
		heading: 'Mastering Personal Finance: Tips for Financial Freedom',
		reads: 500,
		category: 'financeAndBusiness',
		author: {
			id: 'author5',
			name: 'Emma Wilson',
		},
	},
	// Add more blog objects here...
];

export default blogs;
