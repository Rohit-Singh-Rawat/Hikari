import { useQuery } from '@tanstack/react-query';
import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { BlogPropsType } from '../types/Blogprops.type';
import blogs from '../temp';
import { Link, useLocation, useParams } from 'react-router-dom';

const UserProfile = () => {
	const { username } = useParams();
	const id = username?.replace('@', '');

	const {
		isLoading,
		error,
		isError,
		data:user,
	} = useQuery({
		queryKey: ['profile', id],
		queryFn: async () => {
			const token = localStorage.getItem('token');
			const response = await axios.get(`http://127.0.0.1:8787/api/v1/user/profile/${id}`, {
				headers: {
					Authorization	: token,
				},
			});

			return response;
		},
		enabled:!!username
	});
	if(isError) return <div>error</div>
	if (isLoading) return <div>Loading</div>
	const location = useLocation();
	console.log(user?.data.user.blogs)
	return (
		<div className='w-full min-h-screen bg-[#EAEAEA] font-fractul '>
			<NavBar />
			<div className='w-full flex justify-center '>
				<div className='min-w-[90%] md:min-w-[672px] max-w-[90%] md:max-w-2xl border-b-2 flex flex-col  gap-5 lg:gap-10 pt-5 lg:pt-10 '>
					<h1 className='lg:text-5xl text-3xl text-start font-semibold lg:underline-offset-8 lg:px-10'>
						{user?.data.user.FullName}
					</h1>
					<div>
						<div className='border-b-2 border-b-[#bdbbbb] pb-3 mx-10'>
							<Link
								to={location.pathname}
								className='font-medium underline underline-offset-[18px]'
							>
								Blogs
							</Link>
						</div>
					</div>
					<div className='flex justify-center flex-col w-full items-center gap-5 px-4 lg:gap-10'>
						{user?.data.user.blogs.map((blog: any) => {
							return (
								<BlogBlock
									reads={blog.reads}
									excerpt={blog.excerpt}
									id={blog.authorId}
									title={blog.title}
									readTime={blog.readTime}
									publishedOn={blog.publishedOn}
									category={blog.category}
									author={user.data.user}
								/>
							);
						})}
					</div>
				</div>{' '}
			</div>
		</div>
	);
};

export default UserProfile;
