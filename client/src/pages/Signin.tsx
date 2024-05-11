
import BgBlock from '../components/BgBlock';
import SignInBlock from '../components/SignInBlock';
import { Toaster } from 'sonner';

const Signin = () => {

	return (
		<div className='w-full h-screen'> 
			<Toaster 
				richColors
			/>
			<div className='grid grid-cols-1 lg:grid-cols-2 w-[100dvw] h-screen'>
				<SignInBlock />
				<BgBlock />
			</div>
		</div>
	);
};

export default Signin;
