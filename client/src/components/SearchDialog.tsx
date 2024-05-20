import React, { FormEvent } from 'react';
import * as Ariakit from '@ariakit/react';
import SearchIcon from './icons/SearchIcon';
import CloseIcon from './icons/CloseIcon'; // Import a close icon
import { useNavigate } from 'react-router-dom';

// Define the props interface
interface SearchDialogProps {
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ searchValue, setSearchValue }) => {
	const dialog = Ariakit.useDialogStore();
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
    dialog.hide()
		if (searchValue) {
			navigate(`/search?q=${searchValue}`);
		}
	};

	return (
		<>
			<Ariakit.Button
				onClick={dialog.show}
				className='block sm:hidden'
				aria-label='Open search dialog'
			>
				<SearchIcon className='size-5 cursor-pointer' />
			</Ariakit.Button>
			<Ariakit.Dialog
				store={dialog}
				backdrop={<div className='backdrop' />}
				className=' dialog '
				aria-label='Search dialog'
			>
				<div className=' w-full flex flex-col gap-4'>
					<Ariakit.Button
						onClick={dialog.hide}
						className='absolute top-2 right-2 p-1'
						aria-label='Close search dialog'
					>
						
							<CloseIcon className='size-5 rounded-md p-1 bg-gray-300 hover:bg-gray-200' />
						
					</Ariakit.Button>
					<form
						className='flex justify-between items-center mt-6'
						onSubmit={handleSubmit}
					>
						<input
							type='text'
							id='searchBlog'
							placeholder='Search'
							className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							aria-label='Search'
						/>
						<button
							type='submit'
							className='ml-2 p-2 bg-emerald-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
						>
							<SearchIcon className='size-5' />
						</button>
					</form>
				</div>
			</Ariakit.Dialog>
		</>
	);
};

export default SearchDialog;
