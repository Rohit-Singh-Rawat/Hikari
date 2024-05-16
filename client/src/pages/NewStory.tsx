import HikariIcon from '../components/icons/HikariIcon';
import Content from '../components/Content';
import Profile from '../components/Profile';

const NewStory = () => {
	return (
		<div className='flex w-full flex-col items-center font-fractul gap-10'>
			<div className='flex py-5 items-center px-5 lg:px-0 min-w-full max-w-full md:max-w-2xl md:min-w-[672px] lg:max-w-4xl lg:min-w-[896px] justify-between'>
				<HikariIcon className='h-10 w-32' />
				<div className='flex items-center gap-10'>
					<div className='rounded-2xl bg-green-400 px-2 text-sm py-[2px]'>Publish</div>
					<Profile />
				</div>
			</div>
			<div className='flex flex-col items-start min-w-full max-w-full md:max-w-2xl md:min-w-[672px]  lg:max-w-3xl lg:min-w-[768px]'>
				<input
					type='text'
					placeholder='Title'
					autoFocus
					className='outline-none m-2 lg:m-0 lg:p-3 pl-2  text-2xl md:text-3xl lg:text-4xl w-[90%] border-slate-300 border-l-[1px]'
				/>
				<Content />
			</div>
		</div>
	);
};

export default NewStory;
