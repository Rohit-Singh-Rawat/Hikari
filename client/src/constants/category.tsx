import { Category } from "@whale_in_space/hikari-common";

export const categories: Record<
	Category,
	{
		name: string;
		icon: string;
		color: string;
		description: string;
	}
> = {
	[Category.LIFESTYLE]: {
		name: 'Lifestyle',
		icon: '🌱',
		color: 'bg-green-500',
		description:
			'Covering topics like health, fitness, beauty, travel, relationships, and personal development.',
	},
	[Category.TECHNOLOGY]: {
		name: 'Technology',
		icon: '🔧',
		color: 'bg-zinc-500',
		description:
			'Exploring the latest gadgets, software reviews, tech news, how-to guides, and troubleshooting tips.',
	},
	[Category.FASHION]: {
		name: 'Fashion',
		icon: '👗',
		color: 'bg-yellow-500',
		description:
			'Sharing fashion trends, style guides, outfit inspiration, shopping hauls, and beauty tips.',
	},
	[Category.FOOD_AND_COOKING]: {
		name: 'Food and Cooking',
		icon: '🍳',
		color: 'bg-red-500',
		description:
			'Featuring recipes, cooking techniques, restaurant reviews, food photography, and culinary adventures.',
	},
	[Category.FINANCE_AND_BUSINESS]: {
		name: 'Finance and Business',
		icon: '💼',
		color: 'bg-blue-500',
		description:
			'Providing insights into personal finance, investing tips, entrepreneurship advice, career development, and economic analysis.',
	},
	[Category.TRAVEL]: {
		name: 'Travel',
		icon: '✈️',
		color: 'bg-blue-300',
		description:
			'Documenting travel experiences, destination guides, budget travel tips, solo travel adventures, and cultural insights.',
	},
	[Category.PARENTING]: {
		name: 'Parenting',
		icon: '👨‍👩‍👧‍👦',
		color: 'bg-purple-500',
		description:
			'Offering parenting advice, child development tips, family activities, education resources, and parenting hacks.',
	},
	[Category.DIY_AND_CRAFTS]: {
		name: 'DIY and Crafts',
		icon: '🛠️',
		color: 'bg-brown-500',
		description:
			'Showcasing DIY projects, crafting tutorials, home decor ideas, upcycling tips, and handmade product reviews.',
	},
	[Category.SELF_IMPROVEMENT]: {
		name: 'Self-Improvement',
		icon: '🌟',
		color: 'bg-yellow-700 ',
		description:
			'Discussing productivity hacks, mindfulness techniques, goal setting, mental health awareness, and self-care practices.',
	},
	[Category.ENTERTAINMENT]: {
		name: 'Entertainment',
		icon: '🎬',
		color: 'bg-orange-500',
		description:
			'Reviewing movies, TV shows, books, video games, and music albums, as well as discussing celebrity news and pop culture trends.',
	},
	[Category.OTHERS]: {
		name: 'Others',
		icon: '🌐',
		color: 'bg-gray-400',
		description: 'Covering miscellaneous topics that do not fit into the defined categories.',
	},
};
