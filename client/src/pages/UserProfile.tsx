import { useQuery } from '@tanstack/react-query';
import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import axios from '../axios/axios';
import { Link, useLocation, useParams } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import BlogCardSkeleton from '../components/Loading/BlogCardSkeleton';
import NotFoundPage from './PageNotFound';
const UserProfile = () => {
	const { username } = useParams();
	const location = useLocation();
	const id = username?.replace('@', '');
	const {
		isLoading,
		isError,
		data: user,
	} = useQuery({
		queryKey: ['profile', id],
		queryFn: async () => {
			const token = localStorage.getItem('token');
			const response = await axios.get(`/user/profile/${id}`, {
				headers: {
					Authorization: token,
				},
			});

			return response;
		},
		enabled: !!username,
		retry: 0,
	});
	if (isError) {
		return <NotFoundPage />;
	}
	return (
		<div className='w-full min-h-screen bg-[#EAEAEA] font-fractul '>
			<NavBar />
			<div className='w-full flex justify-center '>
				<div className='min-w-[90%] md:min-w-[672px] max-w-[90%] md:max-w-2xl border-b-2 flex flex-col  gap-5 lg:gap-10 pt-5 lg:pt-10 '>
					<div className='lg:px-10 flex flex-col gap-3'>
						<h1 className='lg:text-5xl text-3xl text-start font-semibold '>
							{user?.data.user.FullName || <Skeleton width={300} />}
						</h1>
						<h2 className='lg:text-2xl text-1xl text-start font-medium '>
							{user?.data.user.username ? '@' + user?.data.user.username : <Skeleton />}
						</h2>
						<h3 className='lg:text-xl text-lg text-start font-normal '>
							{user?.data.user.email || <Skeleton />}
						</h3>
					</div>

					<div>
						<div className='border-b-2 border-b-[#bdbbbb] pb-3 '>
							<Link
								to={location.pathname}
								className='font-medium underline underline-offset-[18px]'
							>
								Blogs
							</Link>
						</div>
					</div>
					<div className='flex justify-center flex-col w-full items-center gap-5  lg:gap-10'>
						{isLoading
							? Array(8)
									.fill(0)
									.map((_, i) => <BlogCardSkeleton key={i} />)
							: user?.data.user.blogs.length>0? user?.data.user.blogs.map((blog: any) => {
									return (
										<BlogBlock
											reads={blog.reads}
											excerpt={blog.excerpt}
											id={blog.id}
											title={blog.title}
											readTime={blog.readTime}
											publishedOn={blog.publishedOn}
											category={blog.category}
											author={user.data.user}
										/>
									);
							  }):'No Published Blogs'}
					</div>
				</div>{' '}
			</div>
		</div>
	);
};

export default UserProfile;
