import HikariIcon from '../components/icons/HikariIcon';
import Avatar from '../components/Avatar';
import Content from '../components/Content';

const NewStory = () => {
	return (
		<div className='flex w-full flex-col items-center font-fractul gap-10'>
			<div className='flex py-5 items-center max-w-4xl min-w-[896px] justify-between'>
				<HikariIcon className='h-10 w-32' />
				<div className='flex items-center gap-10'>
					<div className='rounded-2xl bg-green-400 px-2 text-sm py-[2px]'>Publish</div>
					<Avatar
						name='rohit'
						className='size-8'
					/>
				</div>
			</div>
			<div className='flex flex-col items-start max-w-3xl min-w-[768px]'>
				<input
					type='text'
					placeholder='Title'
					autoFocus
					className='outline-none p-3 text-4xl border-slate-300 border-l-[1px]'
				/>
				<Content />
			</div>
		</div>
	);
};

export default NewStory;
