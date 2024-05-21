import { cn } from '../utils/cn';

const Avatar = ({ name, className }: { name: string; className: string }) => {
	
	return (
		<div
			className={cn(
				'rounded-full flex capitalize  justify-center  items-center border-2 text-white bg-black border-black  cursor-pointer',
				className
			)}
		>
			{name[0]}
		</div>
	);
};

export default Avatar;
