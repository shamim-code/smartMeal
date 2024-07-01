"use client"
import React, { useState } from 'react'
import MealOverview from './MealOverview'
import MealDetails from './MealDetails'
import { useFormik } from 'formik';
import TodaysMeal from './TodaysMeal';
import Customer from './Customer';

export default function Admin() { 

   const formik = useFormik({
      initialValues:{
         reportType:"",
         year:"",
         month:""
      },
      onSubmit: (values)=>{
         console.log(values);
         formik.resetForm();
      }
   })

    
  return (
    <div className=' bg-slate-100 mt-1'>
       <div id='menu' >
         <form className=' bg-orange-500 flex flex-col items-center gap-y-2 p-2'>
             <p><label className='text-white uppercase font-semibold'>Report Type:</label>
             <select name="reportType" onChange={formik.handleChange} value={formik.values.reportType}>
                <option>Select</option>
                <option value="overview">Overview</option>
                <option value="details">Details</option>
                <option value="report">Customer Report</option>
             </select>
             </p>

             <p><label className='text-white uppercase font-semibold'>Date:</label>
             <select name="year" onChange={formik.handleChange} value={formik.values.year}>
                <option>Select</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
             </select>
             </p>

             <p><label className='text-white uppercase font-semibold'>Month:</label>
             <select name="month" onChange={formik.handleChange} value={formik.values.month}>
                <option>Select</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
             </select>
             </p>

             <p id='id_of_customer' className={formik.values.reportType === "report" ? "" : "hidden"}><label className=' text-white uppercase mr-1'>Customer ID:</label>
             <input id='customer_id' className=' px-1 rounded outline-none' type='text' placeholder='customer id' /></p>
             <button className='my-5 px-4 py-1 bg-white rounded uppercase hover:bg-transparent hover:border border-2 border-white duration-200'>Go</button>
         </form>
       </div>


       <div id='content'>

          {
            formik.values.reportType === "overview" ? <MealOverview /> : formik.values.reportType === "details" ? <MealDetails /> : formik.values.reportType === "report" ? <Customer />: <TodaysMeal/>
          }
          

       </div>
    </div>
  )
}
