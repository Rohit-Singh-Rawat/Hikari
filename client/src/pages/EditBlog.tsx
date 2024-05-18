import HikariIcon from '../components/icons/HikariIcon';
import Content from '../components/Content';
import Profile from '../components/Profile';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { Toaster, toast } from 'sonner';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';
import {  BlockNoteEditor} from '@blocknote/core';
import { Category } from '@whale_in_space/hikari-common';
import CategoryInput from '../components/CategoryInput';
import { cn } from '../utils/cn';

const EditBlog = () => {
	const [content, setContent] = useState<string>('');
	const [title, setTitle] = useState<string>('');
	const [isChange, setIsChange] = useState<boolean>(false);
	const [category, setCategory] = useState<Category>();
	const navigate = useNavigate();

	const { user, isLoading: pageLoading } = useAuth();
	const { id } = useParams();

	const { isLoading, error, isError, isSuccess, data } = useQuery({
		queryKey: ['editBlog', id],
		queryFn: async () => {
			const token = localStorage.getItem('token');
			const response = await axios.get(`http://127.0.0.1:8787/api/v1/blog/${id}/edit`, {
				headers: {
					Authorization: token,
				},
			});
			return response.data;
		},
		enabled: !!id,
		staleTime: 300000,
	});

	const mutation = useMutation({
		mutationFn: () => {
			if (title.trim() === '' || content.trim() === '') {
				throw new Error('Title and Content needed');
			}

			toast.loading(data.blog.published? 'Updating blog...':'Saving to draft...');
			return axios.put(
				`http://127.0.0.1:8787/api/v1/blog`,
				{
					id: id,
					title: title,
					content: content,
					authorId: user?.id,
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
		onError: () => {
			toast.error('Error while saving');
			setIsChange(false);
		},
		onSuccess: () => {
			toast.success('Saved');
		},
	});
	const mutationPublish = useMutation({
		mutationFn: () => {
			if (title.trim() === '' || content.trim() === '') {
				throw new Error('Title and Content needed');
			}
			toast.loading('Publishing...');
			return axios.post(
				`http://127.0.0.1:8787/api/v1/blog/publish/${id}`,
				{
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
		onError: () => {
			toast.error('Error while Publishing!!! Try Again');
			setIsChange(false);
		},
		onSuccess: () => {
			toast.success('Published');
			setTimeout(() => navigate(`/blog/${id}`), 500);
		},
	});
	const debounceSave = useCallback(
		debounce(() => mutation.mutate(), 1000),
		[]
	);

	const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
		setIsChange(true);
	};

	const editor = useMemo(() => {
		if (!isSuccess) return undefined;
		const blocks = JSON.parse(data.blog.content);
		setTitle(data.blog.title);
		setCategory(data.blog.category);
		setContent(data.blog.content)
		return BlockNoteEditor.create({ initialContent: blocks });
	}, [isSuccess, data]);

	const onChangeContent = () => {
		if (editor) {
			setContent(JSON.stringify(editor.document));
			setIsChange(true);
		}
	};

	useEffect(() => {
		if (isChange) {
			debounceSave();
		}
	}, [title, content, category, debounceSave, isChange]);

	if (pageLoading || isLoading) {
		return <>Loading</>;
	}

	if (isError) {
		return <div>Error: {error?.message}</div>;
	}

	return (
		<div className='flex font-fractul h-screen'>
			<Toaster />
			<div className='flex w-full flex-col items-center font-fractul gap-10 min-h-screen'>
				<div className='flex py-5 items-center px-5 lg:px-0 min-w-full max-w-full md:max-w-2xl md:min-w-[672px] lg:max-w-4xl lg:min-w-[896px] justify-between'>
					<Link to='/'>
						<HikariIcon className='h-10 w-32' />
					</Link>

					<div className='flex items-center gap-10'>
						<button
							className={cn(
								'rounded-2xl bg-green-400 px-2 text-sm py-[2px]',
								data.blog.publised
									? 'bg-slate-600'
									: mutationPublish.isPending
									? 'bg-green-300'
									: ''
							)}
							onClick={() => mutationPublish.mutate()}
							disabled={data.blog.published || mutationPublish.isPending || mutation.isPending}
						>
							Publish
						</button>
						<Profile />
					</div>
				</div>
				<div className='flex flex-col items-start min-w-full max-w-full md:max-w-2xl md:min-w-[672px] lg:max-w-3xl lg:min-w-[768px]'>
					<input
						type='text'
						value={title}
						placeholder='Title'
						autoFocus
						className='outline-none m-2 lg:m-0 lg:p-3 pl-2 text-2xl md:text-3xl lg:text-4xl w-[90%] border-slate-300 border-l-[1px]'
						onChange={onChangeTitle}
					/>
					<div>
						<CategoryInput
							defaultValue={category}
							onClick={(cat: Category) => {
								setCategory(cat);
								setIsChange(true);
							}}
						/>
					</div>
					<Content
						editor={editor}
						onChange={onChangeContent}
					/>
				</div>
			</div>
		</div>
	);
};

export default EditBlog;
