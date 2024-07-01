"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

export default function Navbar({children}) {

  const currentPath = usePathname();
  
  console.log(currentPath);
  return (
    <div>
      <div className=' flex justify-between p-1 font-serif bg-[#010101] '>
        <h1 className='text-2xl md:text-3xl text-yellow-600'>SmartMeal</h1>
          <ul className='hidden md:flex text-white'>
            <Link href={"/"} className= {`md:text-[20px] px-1 cursor-pointer hover:text-yellow-600 hover:border border-1 border-yellow-600 rounded-sm m-1 duration-200 ${currentPath ==="/"? " text-orange-500":"text-white"}`}>Home</Link>
            <Link href={"/about"} className= {`md:text-[20px] px-1 cursor-pointer hover:text-yellow-600 hover:border border-1 border-yellow-600 rounded-sm m-1 duration-200 ${currentPath ==="/about"? " text-orange-500":"text-white"}`}>About</Link>

            <Link href={"/contact"} className= {`md:text-[20px] px-1 cursor-pointer hover:text-yellow-600 hover:border border-1 border-yellow-600 rounded-sm m-1 duration-200 ${currentPath ==="/contact"? " text-orange-500":"text-white"}`}>Contact</Link>

            <Link href={"/meals"} className= {`md:text-[20px] px-1 cursor-pointer hover:text-yellow-600 hover:border border-1 border-yellow-600 rounded-sm m-1 duration-200 ${currentPath ==="/meals"? " text-orange-500":"text-white"}`}>Meals</Link>

            <Link href={"/login"} className= {`md:text-[20px] px-1 cursor-pointer hover:text-yellow-600 hover:border border-1 border-yellow-600 rounded-sm m-1 duration-200 ${currentPath ==="/login"? " text-orange-500":"text-white"}`}>Login</Link>

            <Link href={"/registration"} className= {`md:text-[20px] px-1 cursor-pointer hover:text-yellow-600 hover:border border-1 border-yellow-600 rounded-sm m-1 duration-200 ${currentPath ==="/registration"? " text-orange-500":"text-white"}`}>Register</Link>
          </ul>
        </div>
        <div >{children}</div>
    </div>
  )
}
