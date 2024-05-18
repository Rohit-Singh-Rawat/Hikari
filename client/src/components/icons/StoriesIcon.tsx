import { cn } from "../../utils/cn";

export const StoriesIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 32 32'
			id='blog'
			className={cn('size-5', className)}
		>
			<g>
				<path d='M26 12h-2V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v12a1 1 0 0 0 2 0V8a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3 1 1 0 0 0-2 0 5 5 0 0 0 5 5h16a5 5 0 0 0 5-5v-9a3 3 0 0 0-3-3Z'></path>
				<path d='M11.5 14h4a2.5 2.5 0 0 0 0-5h-4a2.5 2.5 0 0 0 0 5zm0-3h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm0 12h9a2.5 2.5 0 0 0 0-5h-9a2.5 2.5 0 0 0 0 5zm0-3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z'></path>
			</g>
		</svg>
	);
};