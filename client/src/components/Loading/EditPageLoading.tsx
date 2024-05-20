import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // import the CSS

const EditPageLoading = () => {
	return (
		<div className='flex flex-col items-start min-w-full max-w-full md:max-w-2xl md:min-w-[672px] lg:max-w-3xl lg:min-w-[768px]'>
			<Skeleton
				height={40}
				width={600}
				style={{ marginBottom: '1rem' }}
			/>
			<Skeleton
				height={25}
				width={300}
				style={{ marginBottom: '1rem' }}
			/>
			<Skeleton
				height={500}
				width={768}
			/>
		</div>
	);
};

export default EditPageLoading;
