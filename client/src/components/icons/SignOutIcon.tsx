import { cn } from '../../utils/cn';
const SignOutIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 96 96'
			id='LogOut'
			className={cn('size-5', className)}
		>
			<path
				stroke='#000000'
				strokeLinecap='round'
				strokeWidth='5'
				d='M56 79L60 79C68.2843 79 75 72.2843 75 64L75 32C75 23.7157 68.2843 17 60 17L56 17M33 61L24.9498 52.9498C22.2161 50.2161 22.2161 45.7839 24.9497 43.0503L33 35M35 48L63 48'
				className='colorStroke000000 svgStroke'
			></path>
		</svg>
	);
};

export default SignOutIcon;
