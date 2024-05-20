import { useQuery } from '@tanstack/react-query';
import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { BlogPropsType } from '../types/Blogprops.type';
import { useMemo, useState } from 'react';
import { cn } from '../utils/cn';

import { Link, Navigate, useLocation } from 'react-router-dom';
const Stories = () => {
	const [showDraft, setShowDraft] = useState<boolean>(true);
 
	const {
		isLoading,
		isError,
		data: stories,
	} = useQuery({
		queryKey: ['stories'],
		queryFn: async () => {
			const token = localStorage.getItem('token');
			const response = await axios.get(`http://127.0.0.1:8787/api/v1/blog/stories`, {
				headers: {
					Authorization: token,
				},
			});

			return response;
		},
	});
	const draft = useMemo(() => {
		if (stories)
			return stories.data.blogs.filter(
				(story: BlogPropsType & { published: boolean }) => story.published === false
			);
	}, [stories]);
	const published = useMemo(() => {
		if (stories)
			return stories.data.blogs.filter(
				(story: BlogPropsType & { published: boolean }) => story.published === true
			);
	}, [stories]);
	if (isError) return <div>error</div>;
	if (isLoading) return <div>Loading</div>;
	
	return (
		<div className='w-full min-h-screen bg-[#EAEAEA] font-fractul '>
			<NavBar />
			<div className='w-full flex justify-center '>
				<div className='min-w-[90%] md:min-w-[672px] max-w-[90%] md:max-w-2xl border-b-2 flex flex-col  gap-5 lg:gap-10 pt-5 lg:pt-10 '>
					<h1 className='lg:text-5xl text-3xl text-start font-semibold lg:underline-offset-8 lg:px-10'>
						Your Stories
					</h1>
					<div>
						<div className={'border-b-2 border-b-[#bdbbbb] pb-3 mx-10 flex gap-10'}>
							<button
								onClick={() => setShowDraft(true)}
								className={cn(
									'font-medium underline underline-offset-[18px]',
									showDraft ? 'underline' : 'no-underline'
								)}
							>
								Draft {draft?.length}
							</button>
							<button
								onClick={() => setShowDraft(false)}
								className={cn(
									'font-medium underline underline-offset-[18px]',
									!showDraft ? 'underline' : 'no-underline'
								)}
							>
								Published {published?.length}
							</button>
						</div>
					</div>
					<div className='flex justify-center flex-col w-full items-center gap-5 px-4 lg:gap-10'>
						{showDraft
							?( draft.length> 0? draft.map((blog: any) => {
									return (
										<BlogBlock
											reads={blog.reads}
											excerpt={blog.excerpt}
											id={blog.authorId}
											title={blog.title}
											readTime={blog.readTime}
											publishedOn={blog.publishedOn}
											category={blog.category}
											author={blog.author}
										/>
									);
							  }):'No Draft blog')
							: (published.length > 0 ?published.map((blog: any) => {
									return (
										<BlogBlock
											reads={blog.reads}
											excerpt={blog.excerpt}
											id={blog.authorId}
											title={blog.title}
											readTime={blog.readTime}
											publishedOn={blog.publishedOn}
											category={blog.category}
											author={blog.author}
										/>
									);
							  }):'No Published blog')}
					</div>
				</div>{' '}
			</div>
		</div>
	);
};

export default Stories;
