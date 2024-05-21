import React from 'react';
import { useNavigate } from 'react-router-dom';

const OopsPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className='flex items-center justify-center min-h-screen bg-black text-white'>
			<div className='text-center'>
				<h1 className='text-6xl font-bold mb-4'>Oops!</h1>
				<p className='text-xl mb-8'>Something went wrong. Please try again later.</p>
				<div className='flex justify-center items-center'>
					<div className='rounded-full h-40 w-40 flex items-center justify-center border-4 border-white relative'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 32 32'
							id='Question'
							className='animate-shake'
						>
							<path
								d='M13.774 26.028a2.06 2.06 1080 1 0 4.12 0 2.06 2.06 1080 1 0-4.12 0zm5.69-7.776c2.898-1.596 4.37-3.91 4.37-6.876 0-5.094-4.018-7.376-8-7.376-3.878 0-8 2.818-8 8.042a2 2 0 1 0 4 0c0-2.778 2.074-4.042 4-4.042 1.494 0 4 .438 4 3.376 0 1.042-.274 2.258-2.298 3.374-1.376.754-3.702 2.712-3.702 5.25a2 2 0 1 0 4 0c0-.372.79-1.286 1.63-1.748z'
								fill='#ffffff'
								className='color000000 svgShape'
							></path>
						</svg>
					</div>
				</div>
				<button
					onClick={() => navigate('/')}
					className='mt-8 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition'
				>
					Go Home
				</button>
			</div>
		</div>
	);
};

export default OopsPage;
