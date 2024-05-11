import React from 'react';
import HikariIcon from './icons/HikariIcon';
import { Link } from 'react-router-dom';
import LabelledButton from './LabelledButton';

const SignInBlock = () => {
	return (
		<div className='h-screen w-full font-olyford flex flex-col gap-6 lg:gap-16 items-center'>
			<Link
				to={'/'}
				className='w-full'
			>
				<HikariIcon className='w-32 h-10 mx-6 mt-10 lg:mx-16 lg:mt-20' />
			</Link>
			<div className='w-[100%] md:w-[60%] md:min-w-[500px] max-w-[600px] md:max-w-none lg:w-[60%] p-10 flex flex-col  items-start gap-8 lg:gap-10'>
				<div>
					<h1 className='font-olyford text-4xl font-bold  text-left'>Sign In </h1>
				</div>

				<form
					action='
        '
					className='w-full flex flex-col gap-10 md:items-center'
				>
					<LabelledButton
						label='Username or Email'
						type='text'
						placeHolder='Enter your username or email'
					/>
					<LabelledButton
						label='Password'
						type='password'
						placeHolder='Enter your password'
					/>
					<input
						type='submit'
						value={'Sign In'}
						className='w-full  p-4 px-5 bg-black font-olyford text-sm text-white rounded-full'
					></input>
					<div className='font-mono font-thin tracking-tighter text-stone-500 text-center w-full'>
						Don't have an account?{' '}
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
