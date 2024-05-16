const TimeIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			enableBackground='new 0 0 24 24'
			viewBox='0 0 24 24'
			id='Time'
			className={className}
		>
			<linearGradient
				id='a'
				x1='1'
				x2='23'
				y1='12'
				y2='12'
				gradientUnits='userSpaceOnUse'
			>
				<stop
					offset='.198'
					stopColor='#000000'
					className='stopColor60d3fc svgShape'
				></stop>
				<stop
					offset='.872'
					stopColor='#b3b3b3'
					className='stopColorfc6bf8 svgShape'
				></stop>
			</linearGradient>
			<path
				fill='url(#a)'
				d='M23,12c0,1.13-0.17,2.24-0.51,3.3C21.04,19.91,16.82,23,12,23C5.93,23,1,18.07,1,12S5.93,1,12,1c4.82,0,9.04,3.09,10.49,7.7c0.17,0.53-0.13,1.09-0.65,1.25c-0.52,0.17-1.09-0.13-1.25-0.65C19.4,5.53,15.95,3,12,3c-4.96,0-9,4.04-9,9c0,4.96,4.04,9,9,9c3.95,0,7.4-2.53,8.59-6.3C20.86,13.83,21,12.92,21,12c0-0.55,0.45-1,1-1S23,11.45,23,12z M12,5c-0.55,0-1,0.45-1,1v6c0,0.13,0.03,0.26,0.08,0.38c0.05,0.12,0.12,0.23,0.22,0.33l4.24,4.24c0.2,0.2,0.45,0.29,0.71,0.29s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L13,11.59V6C13,5.45,12.55,5,12,5z'
			></path>
		</svg>
	);
};

export default TimeIcon;
