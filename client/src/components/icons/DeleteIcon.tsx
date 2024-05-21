import { cn } from '../../utils/cn';

export default function DeleteIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 64 64'
			id='Delete'
			className={cn('size-5', className)}
		>
			<path
				d='M30 48a2 2 0 0 0 4 0V30a2 2 0 0 0-4 0v18zm-6-18a2 2 0 0 0-2 2v12a2 2 0 0 0 4 0V32a2 2 0 0 0-2-2zm16 16a2 2 0 0 0 2-2V32a2 2 0 0 0-4 0v12a2 2 0 0 0 2 2z'
				fill='#f20833'
				className='color000000 svgShape'
			></path>
			<path
				d='M56 6h-8.559l-1.544-4.632A2 2 0 0 0 44 0H20a2 2 0 0 0-1.897 1.368L16.559 6H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v40c0 3.309 2.691 6 6 6h32c3.309 0 6-2.691 6-6V18h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2 8H32a2 2 0 0 0 0 4h18v40c0 1.103-.897 2-2 2H16c-1.103 0-2-.897-2-2V16a2 2 0 0 0-2-2h-2v-4h8a2 2 0 0 0 1.897-1.368L21.441 4h21.117l1.544 4.632A2.001 2.001 0 0 0 46 10h8v4z'
				fill='#f20833'
				className='color000000 svgShape'
			></path>
			<path
				d='M22.59 14.59c-.38.37-.59.88-.59 1.41 0 .53.21 1.04.59 1.41.37.38.88.59 1.41.59.53 0 1.04-.21 1.41-.59.38-.37.59-.88.59-1.41 0-.53-.21-1.04-.59-1.41-.75-.75-2.08-.75-2.82 0z'
				fill='#f20833'
				className='color000000 svgShape'
			></path>
		</svg>
	);
}
