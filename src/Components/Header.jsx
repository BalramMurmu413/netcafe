import React from 'react'
import { FaAlignRight } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import  { useState } from 'react';


export default function Header() {

    const [toggle, setToggle] = useState(false)
  return (
<div className='flex w-full h-20  bg-blue-500 flex-row items-center justify-between '>  
    <div className="p-5">
        <h1 className='text-5xl font-bold  text-white cursor-pointer'>
            NetCafe
        </h1>
        <span className='hover:underline transition-500 cursor-pointer
         text-purple-600 font-bold'>
            Balram
        </span>
    </div>
    <div className='pr-5'>
        <nav >
            <ul className='sm:hidden md:flex flex-row gap-10 font-bold text-white '>
                <li>Home</li>
                <li>Services</li>
                <li>Porduct</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>

    <dir className="p-5 md:hidden lg:hidden ">
        {
            toggle ? 
            <AiOutlineClose className='text-white w-[30px] h-[40px] font-bold cursor-pointer' onClick={() => setToggle(!toggle)} />  
            :
            <FaAlignRight className='text-white w-[30px] h-[40px] font-bold cursor-pointer' onClick={() => setToggle(!toggle)}/>
        }
    </dir>
</div>



  )
}
