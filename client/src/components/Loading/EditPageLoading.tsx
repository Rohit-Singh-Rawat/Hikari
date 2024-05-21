import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // import the CSS

const EditPageLoading = () => {
	return (
		<div className='flex p-3 flex-col items-start min-w-full max-w-full md:max-w-2xl md:min-w-[672px] lg:max-w-3xl lg:min-w-[768px]'>
			<Skeleton
				height={40}
				style={{ marginBottom: '1rem' }}
				containerClassName='w-[60%] md:w-full'
			/>
			<Skeleton
				height={25}
				width={300}
				style={{ marginBottom: '1rem' }}
			/>
			<Skeleton
				height={500}
				containerClassName='w-full'
			/>
		</div>
	);
};

export default EditPageLoading;
