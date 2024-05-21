import { useQuery } from '@tanstack/react-query';
import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import axios from '../axios/axios';

import BlogCardSkeleton from '../components/Loading/BlogCardSkeleton';
import OopsPage from '../components/ErrorPage';
const Home = () => {
	const {
		isLoading,
		isError,
		data: blogs,
	} = useQuery({
		queryKey: ['blogs'],
		queryFn: async () => {
			const token = localStorage.getItem('token');
			const response = await axios.get('/blog/bulk', {
				headers: {
					Authorization: token,
				},
			});

			return response;
		},
	});
	if (isError) {
		return <OopsPage />;
	}

	return (
		<div className='w-full min-h-screen bg-[#EAEAEA] font-fractul'>
			<NavBar />
			<div className='flex flex-col gap-5 lg:gap-10 pt-5 lg:pt-10 '>
				<h1 className='lg:text-5xl text-3xl text-center underline underline-offset-4 lg:underline-offset-8'>
					Blogs
				</h1>
				<div className='flex justify-center flex-col w-full items-center gap-5 px-4 lg:gap-10'>
					{isLoading
						? Array(8)
								.fill(0)
								.map((_, i) => <BlogCardSkeleton key={i} />)
						: blogs?.data?.blogs?.map((blog: any) => {
								return (
									<BlogBlock
										key={blog.id}
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
			</div>
		</div>
	);
};

export default Home;
