import SignUpBlock from '../components/SignUpBlock'
import BgBlock from '../components/BgBlock'
import { Toaster } from 'sonner';

const Signup = () => {
  return (
		<div className='grid grid-cols-1 lg:grid-cols-2'>
			<SignUpBlock />
			<BgBlock />
			<Toaster
				richColors
			/>
		</div>
	);
}

export default Signup
