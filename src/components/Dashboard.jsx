import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = ({setLogin}) => {
  return (
    <div className='flex justify-center items-center h-[80vh] flex-col gap-3' > 
      <img src="../assets/congo.png" className='h-[10%]'/> 
       <h1 className='text-green-600 text-2xl font-semibold'>Congratulations !!</h1>
      <p>You are logged in successfully.</p>
      <NavLink to="/">
    <button className="bg-green-500 text-white px-6 py-3 rounded-lg mt-10">Back</button>
    </NavLink>
    </div>
  )
}

export default Dashboard