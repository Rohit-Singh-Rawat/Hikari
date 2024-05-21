import LabelledButton from './LabelledButton';
import { Link, useNavigate } from 'react-router-dom';
import HikariIcon from './icons/HikariIcon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { SignupType } from '@whale_in_space/hikari-common';
import axios from '../axios/axios';
const SignUpBlock = () => {
	const [signupInputs, setSignupInputs] = useState<SignupType>({
		username: '',
		FullName: '',
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (event: React.FocusEvent<HTMLFormElement>) => {
			event.preventDefault();
			if (
				Object.keys(signupInputs).some(
					(k) => signupInputs[k as keyof typeof signupInputs]?.trim() === ''
				)
			) {
				throw new Error('Please fill out all required fields');
			}

			toast.loading('Signing Up...');

			return axios.post('/user/signup', signupInputs);
		},
		onSettled: () => {
			toast.dismiss();
		},
		onError: (error: AxiosError<{ error?: String }>) => {
			toast.error((error.response?.data?.error as String) || error.message || 'Error');
		},
		onSuccess: (data) => {
			localStorage.setItem('token', data.data.jwt);

			toast.success('Signed In successfully');
			queryClient.invalidateQueries({ queryKey: ['authUser'] });
			setTimeout(() => {
				navigate('/');
			}, 500);
		},
	});
	return (
		<div className='h-screen w-full font-fractul  flex flex-col md:gap-10  lg:gap-14 items-center '>
			<Link
				to={'/'}
				className='w-full'
			>
				<HikariIcon className='w-32 h-10 mx-6 mt-10 lg:mx-16 lg:mt-20' />
			</Link>
			<div className='w-[100%] min-h-[calc(100dvh-200px)] mt-[10vh] md:mt-0  mb-12 justify-center md:w-[60%] md:min-w-[500px] max-w-[600px] md:max-w-none lg:w-[60%] px-10   flex flex-col items-start gap-8'>
				<div>
					<h1 className='font-fractul text-5xl font-bold  text-left'>Sign Up </h1>
				</div>

				<form
					onSubmit={!mutation.isPending ? mutation.mutate : undefined}
					className='w-full flex flex-col gap-5 lg:gap-8'
				>
					<div className='grid grid-cols-2 gap-5 lg:gap-10'>
						<LabelledButton
							label='Full Name'
							type='text'
							placeHolder='Enter your Full Name'
							onChange={(e) => {
								setSignupInputs((c) => ({ ...c, FullName: e.target.value }));
							}}
						/>
						<LabelledButton
							label='Username'
							type='text'
							placeHolder='Enter your Username'
							onChange={(e) => {
								setSignupInputs((c) => ({ ...c, username: e.target.value }));
							}}
						/>
					</div>
					<LabelledButton
						label='Email'
						type='email'
						placeHolder='Enter your email'
						onChange={(e) => {
							setSignupInputs((c) => ({ ...c, email: e.target.value }));
						}}
					/>
					<LabelledButton
						label='Password'
						type='password'
						placeHolder='8+ characters'
						onChange={(e) => {
							setSignupInputs((c) => ({ ...c, password: e.target.value }));
						}}
					/>
					<input
						type='submit'
						value={'Sign Up'}
						className='w-full cursor-pointer  p-4 px-5 bg-black font-fractul text-sm text-white rounded-full'
						disabled={mutation.isPending}
					></input>
					<div className=' text-stone-500 text-center w-full'>
						Already have account?{' '}
						<Link
							to={'/signin'}
							className='underline text-black'
						>
							Sign in
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUpBlock;
