import { useMemo } from 'react';
import Avatar from './Avatar';
import TimeIcon from './icons/TimeIcon';
import ReadIcon from './icons/ReadIcon';
import { Link } from 'react-router-dom';
import { BlogPropsType } from '../types/Blogprops.type';
import { calculateReadTime } from '../../../server/src/utils/ReadTimeCalculate';
import { categories } from '../constants/category';
import { cn } from '../utils/cn';

const BlogBlock = ({
	id,
	heading,
	content,
	publishedOn,
	reads,
	author,
	category,
}: BlogPropsType) => {
	const readTime = useMemo(() => {
		return calculateReadTime({ heading, content });
	}, [heading, content]);

	return (
		<div className=' min-w-[90%] md:min-w-[672px] max-w-[90%] md:max-w-2xl border-b-2 flex flex-col  border-b-stone-300 pb-5 lg:px-10 '>
			<div className='flex items-center justify-start gap-3 '>
				<Avatar
					name={author.name}
					className='size-7 md:size-8 '
				/>
				<div>{author.name}</div>
				<span className='-translate-y-1'>.</span>
				<div>
					{publishedOn.toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</div>
			</div>

			<div className='flex justify-between  items-start  my-3 '>
				<Link to={`/blog/${id}`}>
					<div className='pr-3 '>
						<h3 className='md:text-xl min-h-[2em] font-semibold  line-clamp-2'>{heading}</h3>
						<div className='w-full min-h-[3em] text-sm  md:line-clamp-3  hidden'>{content}</div>
					</div>
				</Link>
			</div>
			<div className='flex justify-between sm:justify-start sm:gap-3 md:gap-5'>
				{category ? <div className={cn('rounded-2xl   px-2 py-[2px] text-sm lg:text-lg text-gray-900 font-medium',categories[category].color )}>{categories[category].name}</div> : null}

				<div className='flex justify-center items-center gap-2'>
					<ReadIcon className='size-5' />
					<p>{reads} reads</p>
				</div>
				<div className='flex justify-center items-center gap-2'>
					<TimeIcon className='w-5' />
					<p>{readTime}</p>
				</div>
			</div>
		</div>
	);
};

export default BlogBlock;
