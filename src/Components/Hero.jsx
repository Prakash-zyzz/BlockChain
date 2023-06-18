import React from 'react'

import heroVideo from "../assests/BlockChain.mp4"

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top[90px]'>
    <video className='object-cover h-full w-full absolute -z-10' src={heroVideo} autoPlay loop muted />
    <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
      <h1>Decentralized</h1>
      <h1 className='py-2'><span className='text-[#00d8ff]'>Trading </span>Protocal</h1>
      <p1 className="text-xl py-4">Guaranteed liquidity trading for millions of users and top Ethereum applications</p1>
        <div>
         <button className='m-2'>Use Defi</button>
         <button className='m-2'>FAQ</button>
        </div>
      </div>
      <div>
        <p className='text-2xl font-bold text-center text-white'>Total Volume Secured   :   $ 42,104,783,662.47</p>
      </div>
    </div>
  )
}

export default Hero