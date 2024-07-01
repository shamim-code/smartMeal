import React from 'react'
import Navbar from '../components/Navbar'

export default function page() {
  return (
    <Navbar>
       <div style={{backgroundImage:'url("./registration.jpg")'}} className=" h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat">

          <form className=' flex flex-col justify-center items-center px-5 py-10 gap-3 rounded backdrop-blur-md bg-orange-500/30 md:w-[600px]'>
            <h1 className='text-white my-5 text-4xl font-serif uppercase'>registration</h1>
            <input required type="text" placeholder='username'  className=' px-1 py-1 rounded-tl-md rounded-br-md focus:outline outline-none'/>
            <input required type="email" placeholder='email' className=' px-1 py-1 rounded-tl-md rounded-br-md focus:outline outline-none'/>
            <p className=' flex gap-10'><label className=' text-white inline-block'>Register as</label> <select className=' inline-block' name='registerType'><option value={"employee"}>Employee</option> <option value={"admin"}>Admin</option></select></p>
            <input required type="number" placeholder='phone' className=' px-1 py-1 rounded-tl-md rounded-br-md focus:outline outline-none'/>
            <input required type="password" placeholder='password' className=' px-1 py-1 rounded-tl-md rounded-br-md focus:outline outline-none'/>
            <textarea required type="text" placeholder='address' className=' px-1 py-1 w-[225px] rounded-tl-md rounded-br-md focus:outline outline-none'/>

            <button className=' my-5 px-4 py-1 bg-white rounded uppercase hover:bg-transparent hover:border border-2 border-white duration-200'>Submit</button>
          </form>

        </div>
    </Navbar>
  )
}
