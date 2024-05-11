
import LabelledButton from './LabelledButton';
import { Link } from 'react-router-dom';
import HikariIcon from './icons/HikariIcon';

const SignUpBlock = () => {
	return (
		<div className='h-screen w-full font-olyford flex flex-col gap-6 lg:gap-14 items-center '>
			<Link
				to={'/'}
				className='w-full'
			>
				<HikariIcon className='w-32 h-10 mx-6 mt-10 lg:mx-16 lg:mt-20' />
			</Link>
			<div className='w-[100%] md:w-[60%] md:min-w-[500px] max-w-[600px] md:max-w-none lg:w-[60%] px-10   flex flex-col items-start gap-8'>
				<div>
					<h1 className='font-olyford text-4xl font-bold  text-left'>Sign Up </h1>
				</div>

				<form
					action='
        '
					className='w-full flex flex-col gap-5 lg:gap-8'
				>
					<div className='grid grid-cols-2 gap-5 lg:gap-10'>
						<LabelledButton
							label='FullName'
							type='text'
							placeHolder='Enter your FullName'
						/>
						<LabelledButton
							label='Username'
							type='text'
							placeHolder='Enter your Username'
						/>
					</div>
					<LabelledButton
						label='Email'
						type='text'
						placeHolder='Enter your email'
					/>
					<LabelledButton
						label='Password'
						type='password'
						placeHolder='8+ characters'
					/>
					<input
						type='submit'
						value={'Sign Up'}
						className='w-full  p-4 px-5 bg-black font-olyford text-sm text-white rounded-full'
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
