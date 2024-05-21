import HikariIcon from '../components/icons/HikariIcon';
import Content from '../components/Content';
import Profile from '../components/Profile';
import { useCreateBlockNote } from '@blocknote/react';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { Toaster, toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import CategoryInput from '../components/CategoryInput';
import { Category } from '@whale_in_space/hikari-common';
import useUser from '../hooks/useUser';
const NewStory = () => {
	const editor = useCreateBlockNote();
	const [content, setContent] = useState<string>('');
	const [title, setTitle] = useState<string>('');
	const [category, setCategory] = useState<Category>();
	const navigate = useNavigate();
	const [isDraftable, setIsDraftable] = useState<boolean>(false);
	const debounceChange = debounce(() => {
		setIsDraftable(true);
	}, 1000);
	const debounceSave = useCallback(() => debounceChange(), []);
	const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
		debounceSave();
	};
	const { user } = useUser();
	const mutation = useMutation({
		mutationFn: () => {
			if (title.trim() === '' || content.trim() === '') {
				throw new Error('Title and Content needed');
			}
			toast('Wait');
			toast.loading('saving to draft...');

			return axios.post(
				'/blog/create',
				{
					title: title,
					content: content,
					authorId: user?.id || localStorage.getItem('User'),
					category: category || undefined,
				},
				{
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				}
			);
		},
		onSettled: () => {
			toast.dismiss();
		},
		onError: (error: AxiosError<{ error: String }>) => {
			toast.error((error.response?.data?.error as String) || error.message || 'Error');
			setIsDraftable(false);
		},
		onSuccess: (data) => {
			toast.success('Blog Drafted');
			setTimeout(() => {
				navigate(`/${data.data.id}/edit`);
			}, 500);
		},
	});
	const onChangeContent = () => {
		setContent(JSON.stringify(editor.document));
		debounceSave();
	};

	useEffect(() => {
		if (isDraftable) {
			mutation.mutate();
		}
	}, [isDraftable, navigate]);

	return (
		<div className='flex font-fractul h-screen '>
			<Toaster />
			<div className='flex w-full flex-col items-center font-fractul gap-10 min-h-screen '>
				<div className='flex py-5 items-center px-5 lg:px-0 min-w-full max-w-full md:max-w-2xl md:min-w-[672px] lg:max-w-4xl lg:min-w-[896px] justify-between '>
					<Link to='/'>
						<HikariIcon className='h-10 w-32' />
					</Link>
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
						onChange={onChangeTitle}
						disabled={mutation.isPending}
					/>
					<CategoryInput
						defaultValue={category}
						onClick={(cat: Category) => {
							setCategory(cat);
						}}
					/>
					<Content
						editor={editor}
						onChange={onChangeContent}
						editable={!mutation.isPending}
					/>
				</div>
			</div>
		</div>
	);
};

export default NewStory;
