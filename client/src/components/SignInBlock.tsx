import React, { useState } from 'react';
import HikariIcon from './icons/HikariIcon';
import { Link, useNavigate } from 'react-router-dom';
import LabelledButton from './LabelledButton';
import { SigninType } from '@whale_in_space/hikari-common';
import {  toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import axios from '../axios/axios';
const SignInBlock = () => {
	const [signinInputs, setSigninTnputs] = useState<SigninType>({
		ValidityState: '',
		password: '',
	});
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (event: React.FocusEvent<HTMLFormElement>) => {
			event.preventDefault();
			if (signinInputs.ValidityState.trim() === '' || signinInputs.password.trim() === '') {
				throw new Error('Please fill out all required fields');
			}
			toast.loading('Signing In...');

			return axios.post('/user/signin', signinInputs);
		},
		onSettled: () => {
			toast.dismiss();
		},
		onError: (error: AxiosError<{ error: String }>) => {
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
		<div className='h-screen w-full font-fractul flex flex-col gap-6 lg:gap-16 items-center'>
			<Link
				to={'/'}
				className='w-full'
			>
				<HikariIcon className='w-32 h-10 mx-6 mt-10 lg:mx-16 lg:mt-20' />
			</Link>
			<div className='w-[100%] min-h-[calc(100dvh-200px)] justify-center md:w-[60%] md:min-w-[500px] max-w-[600px] md:max-w-none lg:w-[60%] p-10 flex flex-col  items-start gap-8 lg:gap-10'>
				<div>
					<h1 className='font-fractul text-5xl font-bold  text-left'>Sign In </h1>
				</div>

				<form
					className='w-full flex flex-col gap-10 md:items-center'
					onSubmit={!mutation.isPending ? mutation.mutate : undefined}
				>
					<LabelledButton
						label='Username or Email'
						type='text'
						placeHolder='Enter your username or email'
						onChange={(e) => {
							setSigninTnputs((c) => ({ ...c, ValidityState: e.target.value }));
						}}
					/>
					<LabelledButton
						label='Password'
						type='password'
						placeHolder='Enter your password'
						onChange={(e) => {
							setSigninTnputs((c) => ({ ...c, password: e.target.value }));
						}}
					/>
					<input
						type='submit'
						value={'Sign In'}
						className='w-full cursor-pointer p-4 px-5 bg-black font-fractul text-sm text-white rounded-full'
						disabled={mutation.isPending}
					></input>
					<div className=' text-stone-500 text-center w-full'>
						Don't have Account?{' '}
						<Link
							to={'/signup'}
							className='underline text-black'
						>
							Sign up
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignInBlock;
