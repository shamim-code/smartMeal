import React from 'react'
import Admin from '../components/Admin'
import Customer from '../components/Customer'
import Navbar from '../components/Navbar'

export default function page() {
  const userType = "admin"
  return (
    <Navbar>
       <div>
          {userType === "admin" ? <Admin /> : <Customer />}
       </div>
    </Navbar>
  )
}
