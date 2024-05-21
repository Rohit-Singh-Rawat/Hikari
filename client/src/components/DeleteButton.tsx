import * as Ariakit from '@ariakit/react';
import DeleteIcon from './icons/DeleteIcon';
import WarningIcon from './icons/WarningIcon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import axios from 'axios';

export default function DeleteButton({ blogId }: { blogId: string }) {
	const dialog = Ariakit.useDialogStore();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: async () => {
			toast.loading('deleting blog...');
			await axios.delete(
				`/blog/${blogId}`,

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
			toast.error('Error while deleting');
		},
		onSuccess: () => {
			toast.success('deleted');
			queryClient.invalidateQueries({ queryKey: ['stories'] });
		},
	});

	return (
		<>
			<Ariakit.Button
				className='p-2 text-red-600 hover:bg-red-100 rounded'
				id={blogId}
				onClick={!mutation.isPending ? dialog.show : dialog.hide}
			>
				<DeleteIcon />
			</Ariakit.Button>
			<Ariakit.Dialog
				store={dialog}
				backdrop={<div className='fixed inset-0 bg-black bg-opacity-50' />}
				className='dialog bg-white rounded-lg p-4 sm:p-6 shadow-lg flex flex-col items-center gap-4 max-w-xs sm:max-w-md mx-4 sm:mx-auto'
				aria-label='Delete confirmation dialog'
				disabled={mutation.isPending}
			>
				<WarningIcon className='w-10 h-10 sm:w-12 sm:h-12 text-red-500' />
				<Ariakit.DialogHeading className='text-lg sm:text-xl font-semibold'>
					Delete the Blog
				</Ariakit.DialogHeading>
				<p className='text-center text-sm sm:text-base text-gray-700'>
					Do you want to delete the blog?
				</p>
				<div className='flex flex-col sm:flex-row gap-2 p-2 sm:p-0  sm:gap-4 mt-4 w-full justify-center'>
					<Ariakit.DialogDismiss className='w-full sm:w-auto px-14 py-2 bg-gray-100 rounded border-2 border-gray-300 hover:bg-gray-200 text-center'>
						Cancel
					</Ariakit.DialogDismiss>
					<Ariakit.Button
						className='w-full sm:w-auto px-12 py-2 bg-red-500 border-2 border-red-700 text-white rounded hover:bg-red-600 text-center'
						onClick={() => {
							mutation.mutate();
							dialog.hide();
						}}
					>
						Delete
					</Ariakit.Button>
				</div>
			</Ariakit.Dialog>
		</>
	);
}
