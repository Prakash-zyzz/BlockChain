import React from 'react'


const Sub = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center '>
        
        <h1>Join Our DeFi Community</h1>
        <div className='py-4'>
            <input className='p-3 rounded-3xl mr-4 ' type='email' placeholder='Enter your E-mail' />
            <button>Sign Up.</button>
        </div>
        <div className='flex justify-center items-center py-2'>
            <input className='mr-2' type='checkbox' />
            <p>Yes, I agree to recieve email communications from Defi</p>
        </div>
    </div>
  )
}

export default Sub