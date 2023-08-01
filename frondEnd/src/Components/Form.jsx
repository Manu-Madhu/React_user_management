import React from 'react'

const Form = () => {
  return (
     <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='uppercase mb-5 text-white font-extrabold text-xl'>Sign Up</h1>
        <form action="" className='flex flex-col gap-5'>
         <input type="text" placeholder='Email' className='border-2 px-5 rounded focus:outline-none'/>        
         <input type="text" placeholder='Password' className='border-2 px-5 rounded focus:outline-none'/>
         <button className='p-1 bg-blue-700 text-white hover:bg-blue-800 rounded'>Submite</button>        
        </form>
        <span className='mt-5 text-white'>For SignUp? <span className='text-blue-400 font-bold cursor-pointer'>Click</span></span>
     </div>
  );
}

export default Form