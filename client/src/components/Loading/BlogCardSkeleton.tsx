import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function BlogCardSkeleton() {
	return (
		<div className=' min-w-[90%] md:min-w-[672px] max-w-[90%] md:max-w-2xl border-b-2 flex flex-col  border-b-stone-300 pb-5 lg:px-10 '>
			<div className='flex justify-start items-center gap-2 '>
				<Skeleton
					circle
					width={35}
					height={35}
				/>
				<div>
					<Skeleton
						width={200}
						height={20}
						
					/>
				</div>
			</div>

			<div className='flex justify-between  items-start  my-3 '>
				<div className='pr-3 flex flex-col gap-5 w-full'>
					<Skeleton
					containerClassName='w-full'
						height={20}
						count={1}
					/>
					<Skeleton
						width={600}
						height={17}
						count={3}
						containerClassName='hidden md:block'
					/>
				</div>
			</div>
			<Skeleton
				width={300}
				height={20}
			/>
		</div>
	);
}
