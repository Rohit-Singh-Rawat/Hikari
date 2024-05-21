
export default function Loading() {
  return (
		<div className='min-h-screen min-w-full flex flex-col justify-center items-center'>
			<div className='container'>
				<div className='dot'></div>
				<div className='dot'></div>
				<div className='dot'></div>
				<div className='dot'></div>
				<div className='dot'></div>
			</div>
			<svg
				width='0'
				height='0'
				className='svg'
			>
				<defs>
					<filter id='uib-jelly-ooze'>
						<feGaussianBlur
							in='SourceGraphic'
							stdDeviation='3'
							result='blur'
						/>
						<feColorMatrix
							in='blur'
							mode='matrix'
							values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
							result='ooze'
						/>
						<feBlend
							in='SourceGraphic'
							in2='ooze'
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
}
