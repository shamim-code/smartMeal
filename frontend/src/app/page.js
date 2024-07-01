import React from 'react'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div style={{backgroundImage:'url("./coverPic.jpg")'}} className=" h-screen w-full ">
       <div> <Navbar /> </div>
       <div className=' text-white text-2xl md:text-3xl ml-5 md:ml-10 mt-28'>
         <p>Grab Your Yummy</p>
         <p className=' text-yellow-600'>Meals</p>

         <p className=' text-[13px] md:text-[16px] w-64 md:w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         <button className=' mt-5 text-[12px] uppercase px-2 bg-orange-500 rounded-full hover:bg-transparent hover:border border-2 border-orange-500 duration-200'>Let's Test</button>
       </div>
       <div></div>
    </div>
  )
}
