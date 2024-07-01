import React from 'react'

export default function MealOverview() {
  const days = [1,2,3,4 ,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  return (
    <div className=' m-2 bg-white rounded '>
      <h1 className=' text-white bg-slate-800 text-center text-2xl mb-2'>Meals Totals by Day</h1>
      {
        days.map((day, i) =>{
          return <p>April-{day} -----------{day*5} </p>
        })
      }
    </div>
  )
}
