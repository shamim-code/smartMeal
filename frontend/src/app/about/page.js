import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function page() {
  return (
    <Navbar>

      <div style={{backgroundImage:'url("./about.gif")'}} className=' h-screen w-full flex items-center justify-center'>
        
        <div className=' backdrop-blur-2xl bg-orange-300/30 p-10 rounded'>
            <h1 className=' text-center text-2xl text-orange-500 uppercase'>About</h1>
            <ol style={{listStyleType:"circle"}} className=' text-white'>
              <li>There are many variations of passages of Lorem Ipsum available </li>
              <li>There are many variations of passages of Lorem Ipsum available </li>
              <li>There are many variations of passages of Lorem Ipsum available </li>
              <li>There are many variations of passages of Lorem Ipsum available </li>
              <li>There are many variations of passages of Lorem Ipsum available </li>
            </ol>
        </div>
      </div>
       
    </Navbar>
  )
}
