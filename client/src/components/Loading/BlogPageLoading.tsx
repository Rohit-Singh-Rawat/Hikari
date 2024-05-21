
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // import the CSS

const BlogPageLoading = () => {
	return (
		<div className='w-full min-h-screen bg-[#EAEAEA] font-fractul'>
			<div className='w-full flex justify-center min-h-[calc(100dvh-100px)]'>
				<div className='min-w-[90%] md:min-w-[672px] max-w-[90%] md:max-w-2xl border-b-2 flex flex-col gap-2 lg:gap-5 pt-5 lg:pt-10'>
					<Skeleton
						height={42}
						className='w-full'
						style={{ marginBottom: '1rem' }}
					/>
					<div className='flex justify-start w-full border-b-[1.5px] border-b-[#bdbbbb] pb-10 items-center gap-3 px-4 lg:gap-5'>
						<Skeleton
							circle={true}
							height={40}
							width={40}
						/>
						<div className='flex flex-col'>
							<Skeleton
								height={20}
								width={100}
								style={{ marginBottom: '0.5rem' }}
							/>
							<Skeleton
								height={15}
								width={150}
							/>
						</div>
					</div>
					<BlogLoading/>
				</div>
			</div>
		</div>
	);
};
const getRandomWidth = () => `${Math.floor(Math.random() * 31) + 70}%`;

const getRandomLines = () => {
	const lines = Math.floor(Math.random() * 2) + 3;
	return new Array(lines).fill(null).map((_, idx) => (
		<Skeleton
			key={idx}
			height={20}
			width={getRandomWidth()}
		/>
	));
};

const BlogLoading = () => {
	const paragraphs = Math.floor(Math.random() * 2) + 3;

	return (
		<div className='flex flex-col gap-4'>
			{Array.from({ length: paragraphs }, (_, idx) => (
				<div
					key={idx}
					className='flex flex-col gap-2 mb-4'
				>
					{getRandomLines()}
				</div>
			))}
		</div>
	);
};

export default BlogPageLoading;
