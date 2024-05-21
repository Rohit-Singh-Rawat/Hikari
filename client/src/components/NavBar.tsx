import { Link, useNavigate } from 'react-router-dom';
import HikariIcon from './icons/HikariIcon';
import HikarisymbolIcon from './icons/HikarisymbolIcon';
import SearchIcon from './icons/SearchIcon';
import WriteIcon from './icons/WriteIcon';
import Profile from './Profile';
import { useState } from 'react';
import SearchDialog from './SearchDialog';

const NavBar = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	
	const navigate = useNavigate();
	
	return (
		<nav className='flex justify-between p-2 border-b-stone-300 border-[0.1px] items-center px-4 lg:px-10'>
			<Link to='/'>
				<HikariIcon className='w-28 h-12 lg:block hidden' />
				<HikarisymbolIcon className='size-5 block lg:hidden' />
			</Link>
			<div className='flex gap-7 lg:gap-10 items-center lg:items-end'>
				<form
					className='hidden justify-center gap-3 items-end lg:border-b-[0.1px] border-y-gray-400 lg:pb-2 px-5  sm:flex'
					onSubmit={(e) => {
						e.preventDefault();
						searchValue ? navigate(`/search?q=${searchValue}`) : null;
					}}
				>
					<input
						type='text'
						id='searchBlog'
						placeholder='Search'
						className='bg-transparent outline-none lg:block hidden'
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<button>
						<SearchIcon className='size-5 cursor-pointer' />
					</button>
				</form>
				<SearchDialog
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>

				<Link
					to='/new-story'
					className='md:flex gap-2 justify-center items-end cursor-pointer opacity-70 hover:opacity-100 hidden '
				>
					<WriteIcon className='size-6' />
					<p>Write</p>
				</Link>
				<Profile />
			</div>
		</nav>
	);
};

export default NavBar;
