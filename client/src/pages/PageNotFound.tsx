// NotFoundPage.js
import { Link } from 'react-router-dom';
import FoodIcon from '../components/icons/FoodIcon';
import MountFujiIcon from '../components/icons/MounfujiIcon';

const NotFoundPage = () => {
	return (
		<div className='flex font-fractul items-center justify-center min-h-screen bg-black text-white'>
			<div className='text-center flex flex-col justify-center items-center gap-7'>
				<div className='relative  flex justify-center gap-5  items-baseline animate-fadeIn'>
					<h1 className='text-9xl mb-4 '>404</h1>
					<FoodIcon className=' size-14  animate-bounce' />
				</div>
				<div className='relative inline-block group'>
					<p className='text-2xl animate-fadeIn'>ラーメンを食べてください</p> 
					<span className='absolute delay-300 shadow-gray-500 shadow-lg w-48 -top-10 left-1/2 transform   -translate-x-1/2 bg-white  ease-out duration-500 text-black font-semibold text-sm p-2 rounded-md opacity-0 group-hover:opacity-50 transition-all'>
						Have Some ramen
					</span>
				</div>
				<p className='text-xl animate-fadeIn'>Page Not Found</p>
				<Link
					to='/'
					className='mt-6 inline-block bg-white text-black py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105'
				>
					Go to Home
				</Link>
				<div className='mt-8 relative w-48 h-48 bg-gradient-to-b from-gray-800 to-black rounded-full overflow-hidden animate-fadeIn'>
					<div className='japanese-theme absolute inset-0 bg-center bg-cover animate-rotateImage flex items-center justify-center'>
						<MountFujiIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
