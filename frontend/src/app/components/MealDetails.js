import React from 'react'

export default function MealDetails() {
  const days = [1,2,3,4 ,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  return (
    <div>
      <h1 className='text-center text-2xl bg-slate-800 text-white'>Meals in details - April</h1>
      {
        days.map((day, i) => {
          return <div className=' bg-white m-2 p-2 rounded'>
            <h3>April- {day}</h3>
            <p>Breakfast : {day*3}</p>
            <p>Lunch : {day*5}</p>
            <p>Dinner: {day*4}</p>
          </div>
        })
      }
    </div>
  )
}
