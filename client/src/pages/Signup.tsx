import React from 'react'
import SignUpBlock from '../components/SignUpBlock'
import BgBlock from '../components/BgBlock'

const Signup = () => {
  return (
		<div className='grid grid-cols-1 lg:grid-cols-2'>
			<SignUpBlock />
			<BgBlock />
		</div>
	);
}

export default Signup
