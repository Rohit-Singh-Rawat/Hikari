import { cn } from '../../utils/cn';

export default function WarningIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			id='warning'
			className={cn('size-12', className)}
		>
			<path
				d='M21.2 16.5 14.6 4.7c-.5-1-1.5-1.5-2.6-1.5s-2.1.5-2.6 1.5L2.8 16.5c-.5.9-.5 2.1 0 3S4.3 21 5.4 21h13.2c1.1 0 2-.6 2.6-1.5s.5-2 0-3zm-1.7 2c-.1.1-.3.5-.9.5H5.4c-.5 0-.8-.3-.9-.5s-.3-.5 0-1l6.6-11.9c.3-.5.7-.5.9-.5s.6 0 .9.5l6.6 11.9c.2.5 0 .9 0 1z'
				fill='#f20833'
				className='color000000 svgShape'
			></path>
			<path
				d='M12 9c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1s1-.4 1-1v-3c0-.6-.4-1-1-1z'
				fill='#f20833'
				className='color000000 svgShape'
			></path>
			<circle
				cx='12'
				cy='16'
				r='1'
				fill='#f20833'
				className='color000000 svgShape'
			></circle>
		</svg>
	);
}
