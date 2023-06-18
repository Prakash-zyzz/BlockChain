import React from 'react'
import Terminal from "../assests/terminal.png"

const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
     <div className='max-w-[1240px] px-16 py-16 md:flex'>
     <div>
      <h1>Superpowers of DEFI developers.</h1>
      <p>
        checkout the <span className='text-[#00d8ff]'>documentation</span> , the <span className='text-[#00d8ff]'>quick start</span> or a guide below to integrate 
        your project with thousands of tokens and billions of liquidity. 
      </p>
    </div>
     <div className='flex justify-center w-full py-16'>
       <img src={Terminal} className='max-w-[250px] shadow-lg shadow-cyan-500/50' />
     </div>
     </div>
    </div>
  )
}

export default Developers