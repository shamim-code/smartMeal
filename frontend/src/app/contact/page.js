import React from 'react'
import Navbar from '../components/Navbar'

export default function page() {
  return (
    <Navbar>

        <div style={{backgroundImage:'url("./contact.png")'}} className=" h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat">

          <form className=' flex flex-col justify-center items-center px-5 py-10 gap-3 rounded backdrop-blur-md bg-blue-900/30 md:w-[500px]'>
            <h1 className='text-white my-5 text-4xl font-serif uppercase'>contact</h1>
            <input required type="text" placeholder='Subject'  className=' px-1 py-1 rounded-tl-md rounded-br-md focus:outline outline-none'/>
            <input required type="email" placeholder='email' className=' px-1 py-1 rounded-tl-md rounded-br-md focus:outline outline-none'/>
            
            <textarea required type="text" placeholder='message' className=' px-1 py-1 w-[225px] rounded-tl-md rounded-br-md focus:outline outline-none'/>

            <button className=' my-5 px-4 py-1 bg-white rounded uppercase hover:bg-transparent hover:border border-2 border-white duration-200'>Send</button>
          </form>

        </div>
       
    </Navbar>
  )
}
