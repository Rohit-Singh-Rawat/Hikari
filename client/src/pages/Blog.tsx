import { useQuery } from '@tanstack/react-query';
import NavBar from '../components/NavBar';
import axios from '../axios/axios';
import { BlogPropsType } from '../types/Blogprops.type';
import Avatar from '../components/Avatar';
import { useEffect, useMemo, useState } from 'react';
import '../default.css';
import { useParams } from 'react-router-dom';
import { BlockNoteEditor } from '@blocknote/core';
import BlogPageLoading from '../components/Loading/BlogPageLoading';
import OopsPage from '../components/ErrorPage';

const Blog = () => {
	const [html, setHTML] = useState<string>('');
	const [blog, setBlog] = useState<BlogPropsType>();
	const { id } = useParams();
	const { isLoading, isError, isSuccess, data } = useQuery({
		queryKey: ['blogs', id],
		queryFn: async () => {
			const token = localStorage.getItem('token');
			const response = await axios.get(`/blog/${id}`, {
				headers: {
					Authorization: token,
				},
			});
			return response.data;
		},
		enabled: !!id,
		staleTime: 300000,
	});
	const editor = useMemo(() => {
		if (!isSuccess) return undefined;
		setBlog(data.blog);
		const blocks = JSON.parse(data.blog.content);
		return BlockNoteEditor.create({ initialContent: blocks });
	}, [isSuccess, data]);

	useEffect(() => {
		(async () => {
			if (editor) setHTML(await editor.blocksToHTMLLossy(editor.document));
		})();
	}, [editor]);
	if (isError) {
		return <OopsPage />;
	}
	return (
		<div className='w-full min-h-screen bg-[#EAEAEA] font-fractul'>
			<NavBar />
			{isLoading ? (
				<BlogPageLoading />
			) : (
				<div className='w-full flex justify-center min-h-[calc(100dvh-100px)]'>
					{' '}
					<div className='min-w-[90%] md:min-w-[672px] max-w-[90%] md:max-w-2xl border-b-2 flex flex-col  gap-5 lg:gap-10 pt-5 lg:pt-10 '>
						<h1 className='lg:text-[42px] tracking-wider leading-snug text-pretty  break-words text-3xl text-left font-semibold'>
							{data.blog.title}
						</h1>
						<div className='flex justify-start f w-full border-b-[1.5px] border-b-[#bdbbbb] pb-10 items-center gap-3 px-4 lg:gap-5'>
							<Avatar
								name={blog?.author?.FullName ?? 'Unknown'}
								className='size-7 md:size-10 '
							/>
							<div className=' flex font-medium flex-col'>
								<div>{blog?.author.FullName}</div>
								<div className='flex text-sm gap-2 font-normal text-gray-700'>
									<div>{blog?.readTime} min read</div>
									<span className='-translate-y-1'>.</span>
									<div>
										{blog?.publishedOn
											? new Date(blog?.publishedOn).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'long',
													day: 'numeric',
											  })
											: ''}
									</div>
								</div>
							</div>
						</div>
						<div
							id='blogContent'
							dangerouslySetInnerHTML={{ __html: html }}
						></div>
					</div>
				</div>
			)}
			<div className='border-t-2 border-t-[#bdbbbb] pt-3  w-full'></div>
		</div>
	);
};

export default Blog;
