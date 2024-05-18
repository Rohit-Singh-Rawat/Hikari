import { useQuery } from '@tanstack/react-query';
import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { BlogPropsType } from '../types/Blogprops.type';
import blogs from '../temp';
import { Link, useLocation } from 'react-router-dom';

const Search = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const queryValue = queryParams.get('q');
	
	const {
		isLoading,
		error,
		isError,
		data: searchedBlogs,
	} = useQuery({
		queryKey: ['blogs', queryValue],
		queryFn: async () => {
			const token = localStorage.getItem('token');
			const response = await axios.get(`http://127.0.0.1:8787/api/v1/blog/search?q=${queryValue}`, {
				headers: {
					Authorization: token,
				},
			});

			return response;
		},
		staleTime: 0,
		enabled:!!queryValue
	});
	if (isError) return <div>error</div>;
	if (isLoading) return <div>Loading</div>;
	return (
		<div className='w-full min-h-screen bg-[#EAEAEA] font-fractul '>
			<NavBar />
			<div className='w-full flex justify-center '>
				<div className='min-w-[90%] md:min-w-[672px] max-w-[90%] md:max-w-2xl border-b-2 flex flex-col  gap-5 lg:gap-10 pt-5 lg:pt-10 '>
					<h1 className='lg:text-5xl text-3xl text-[#7c7c7c] text-start font-semibold max-w-full truncate lg:underline-offset-8 lg:px-10'>
						Results for <span className='text-black lg:text-6xl text-4xl'>{queryValue}</span>
					</h1>
					<div>
						<div className='border-b-2 border-b-[#bdbbbb] pb-3 mx-10 '></div>
					</div>
					<div className='flex justify-center flex-col w-full items-center gap-5 px-4 lg:gap-10'>
						{searchedBlogs?.data?.blogs?.map((blog: any) => {
							return (
								<BlogBlock
									reads={blog.reads}
									excerpt={blog.excerpt}
									id={blog.id}
									readTime={blog.readTime}
									title={blog.title}
									publishedOn={blog.publishedOn}
									category={blog.category}
									author={blog.author}
								/>
							);
						})}
					</div>
				</div>{' '}
			</div>
		</div>
	);
};

export default Search;
