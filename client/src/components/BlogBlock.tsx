import { useMemo } from 'react';
import Avatar from './Avatar';
import TimeIcon from './icons/TimeIcon';
import ReadIcon from './icons/ReadIcon';
import { Link } from 'react-router-dom';
import { BlogPropsType } from '../types/Blogprops.type';
import { calculateReadTime } from '../../../server/src/utils/ReadTimeCalculate';

const BlogBlock = ({ id, heading, content, publishedOn, reads, imgUrl, author }: BlogPropsType) => {
	const readTime = useMemo(() => {
		return calculateReadTime({ heading, content });
	}, [heading, content]);

	return (
		<div className=' min-w-[90%] md:min-w-[672px] max-w-2xl border-b-2 flex flex-col  border-b-stone-300 pb-5 lg:px-10 '>
			<div className='flex items-center justify-start gap-3 '>
				<Avatar
					url={author?.avatarUrl}
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
					<div className='md:max-w-md md:min-w-[448px] max-w-60 min-w-60 w-md pr-3 '>
						<h3 className='md:text-xl min-h-[2em] font-semibold  line-clamp-2'>{heading}</h3>
						<div className='w-full min-h-[3em] text-sm  md:line-clamp-3  hidden'>{content}</div>
					</div>
				</Link>
				<Link to={`/blog/${id}`}>
					<div className='h-14 w-18 md:h-28 md:w-32'>
						<img
							src={imgUrl}
							alt=''
							className='w-full h-full object-cover rounded-md md:rounded-lg'
						/>
					</div>
				</Link>
			</div>
			<div className='flex gap-5'>
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
