import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import blogs from '../temp';

const Home = () => {
	return (
		<div className='w-full min-h-screen bg-[#EAEAEA] font-fractul'>
			<NavBar />
			<div className='flex flex-col gap-5 lg:gap-10 pt-5 lg:pt-10 '>
				<h1 className='lg:text-5xl text-3xl text-center underline underline-offset-8'>Blogs</h1>
				<div className='flex justify-center flex-col w-full items-center gap-5 px-4 lg:gap-10'>
					{blogs.map((blog) => {
						return (
							<BlogBlock
								reads={blog.reads}
								content={blog.content}
								id={blog.id}
								heading={blog.heading}
								publishedOn={blog.publishedOn}
								imgUrl={blog.imgUrl}
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
