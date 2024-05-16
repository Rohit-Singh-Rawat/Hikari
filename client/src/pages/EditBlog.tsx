import HikariIcon from '../components/icons/HikariIcon';
import Content from '../components/Content';
import Profile from '../components/Profile';
import { useCreateBlockNote } from '@blocknote/react';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { Toaster, toast } from 'sonner';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useAuth } from '../Context/AuthContext';
import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import Category from '../components/Category';

const EditBlog = () => {
	const [content, setContent] = useState<string>('');
	const [title, setTitle] = useState<string>('');
	// const debounceChange = debounce(() => {
	// 	setIsDraftable(true);
	// }, 1000);
	// const debounceSave = useCallback(() => debounceChange(), []);
	const { user, isLoading: pageLoading } = useAuth();
	// const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(e.target.value);
	// 	debounceSave();
	// };
	const { id } = useParams();

	const { isLoading, error, isError, isSuccess, data } = useQuery({
		queryKey: ['blogs'],
		queryFn: async () => {
			const token = localStorage.getItem('token');
			const response = await axios.get(`http://127.0.0.1:8787/api/v1/blog/${id}/edit`, {
				headers: {
					Authorization: token,
				},
			});

			return response;
		},
	});
	 const editor = useMemo(() => {
			if (!isSuccess) {
				return undefined;
			}
			const blocks = JSON.parse(data.data.blog.content)
			console.log(blocks, 'dj')
			return BlockNoteEditor.create({initialContent:blocks});
		}, [isSuccess]);
		
	

	// const mutation = useMutation({
	// 	mutationFn: () => {
	// 		if (title.trim() === '' || content.trim() === '') {
	// 			throw new Error('Title and Content needed');
	// 		}
	// 		toast.loading('saving to draft...');

	// 		return axios.post(
	// 			'http://127.0.0.1:8787/api/v1/blog/create',
	// 			{
	// 				title: title,
	// 				content: content,
	// 				authorId: user?.id,
	// 			},
	// 			{
	// 				headers: {
	// 					Authorization: localStorage.getItem('token'),
	// 				},
	// 			}
	// 		);
	// 	},
	// 	onSettled: () => {
	// 		toast.dismiss();
	// 	},
	// 	onError: (error: AxiosError<{ error: String }>) => {
	// 		toast.error((error.response?.data?.error as String) || error.message || 'Error');
	// 		setIsDraftable(false);
	// 	},
	// 	onSuccess: (data) => {
	// 		toast.success('Blog Drafted');
	// 		setTimeout(() => {
	// 			navigate(`/${data.data.id}/edit`);
	// 		}, 500);
	// 	},
	// });

	// const onChangeContent = () => {
	// 	setContent(JSON.stringify(editor.document));
	// 	debounceSave();
	// };

	// useEffect(() => {
	// 	if (isDraftable) {
	// 		mutation.mutate();
	// 	}
	// }, [isDraftable, navigate]);
	if (pageLoading) {
		return <>Loading</>;
	}
	if (isLoading ) {
		return <>Loading</>;
	}
	return (
		<div className='flex w-full flex-col items-center font-fractul gap-10'>
			<Toaster />
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
					// onChange={onChangeTitle}
				/>
				<div><Category/></div>
				<Content
					editor={editor}
					// onChange={onChangeContent}
				/>
			</div>
		</div>
	);
};

export default EditBlog;
