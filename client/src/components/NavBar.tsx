import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import HikariIcon from './icons/HikariIcon';
import HikarisymbolIcon from './icons/HikarisymbolIcon';
import SearchIcon from './icons/SearchIcon';
import WriteIcon from './icons/WriteIcon';

const NavBar = () => {
	return (
		<nav className='flex justify-between p-2 border-b-stone-300 border-[0.1px] items-center px-4 lg:px-10'>
			<Link to='/'>
				<HikariIcon className='w-28 h-12 lg:block hidden' />
				<HikarisymbolIcon className='size-5 block lg:hidden' />
			</Link>
			<div className='flex lg:gap-10 items-center lg:items-end'>
				<div className='flex justify-center items-end lg:border-b-[0.1px] border-y-gray-400 lg:pb-2 px-5'>
					<input
						type='text'
						placeholder='Search'
						className='bg-transparent outline-none lg:block hidden'
					/>
					<SearchIcon className='size-5 cursor-pointer' />
				</div>
				<Link to='/new-story' className='lg:flex gap-2 justify-center items-end cursor-pointer opacity-70 hover:opacity-100 hidden '>
					<WriteIcon className='size-6' />
					<p>Write</p>
				</Link>
				<Avatar
					url='https://res.cloudinary.com/ytx/image/upload/v1715095202/foyp0xkxkwntfusvulas.jpg'
					size={'8'}
				/>
			</div>
		</nav>
	);
};

export default NavBar;
