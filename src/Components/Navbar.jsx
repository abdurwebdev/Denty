import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <>
        <div className='p-5 z-30 fixed top-0 left-0 text-white w-full flex items-center justify-between'>
          <div className='flex gap-x-1 items-center justify-center'>
               <button  className='px-2 py-2  border-2 border-white rounded-full hover:bg-black hover:text-white text-white text-3xl   hover:transition-colors '><AiOutlineMenu/></button>
               <button className='px-2 text-center py-2 text-2xl border-2 border-white rounded-full  text-white    hover:transition-colors '>Menu</button>
          </div>
          <div>
            <h1 className='text-5xl'>DentyTech</h1>
          </div>
          <div className='flex gap-x-1 items-center justify-center'>
            <button className='px-2 py-2 border-2 border-white rounded-full hover:bg-black hover:text-white text-white text-2xl   hover:transition-colors '>LogIn</button>
            <button className='px-2 text-center py-2 border-2 border-white rounded-full hover:bg-black hover:text-white text-white text-2xl bg-black  hover:transition-colors '>Sign Up</button>
          </div>
        </div>
    </>
  )
}

export default Navbar