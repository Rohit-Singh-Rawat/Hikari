import React from 'react'
import BgBlock from '../components/BgBlock'
import SignInBlock from '../components/SignInBlock'

const Signin = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-[100dvw] h-screen'>
      
      <SignInBlock/>
        <BgBlock/>
    </div>
  )
}

export default Signin
