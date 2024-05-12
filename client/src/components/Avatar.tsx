import React from 'react';

const Avatar = ({ url, size }: { url: string; size: string }) => {
	return (
		<div className={`rounded-full flex  justify-center items-center size-${size} cursor-pointer`}>
			<img
				src={url}
				alt='Avatar'
				className={`rounded-full w-full h-full  object-cover `}

			></img>
		</div>
	);
};

export default Avatar;
