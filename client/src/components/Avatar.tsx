import React from 'react';
import { cn } from '../utils/cn';

const Avatar = ({ url, className }: { url: string; className: string }) => {
	return (
		<div
			className={cn(
				'rounded-full flex  justify-center  items-center size-${size} cursor-pointer',
				className
			)}
		>
			<img
				src={url}
				alt='Avatar'
				className={`rounded-full w-full h-full  object-cover `}
			></img>
		</div>
	);
};

export default Avatar;
