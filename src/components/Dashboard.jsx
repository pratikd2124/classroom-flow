import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
      <div>
          <button className="rounded-lg bg-teal-700">
            <Link to={'/dashboard/studdashboard'} className='flex gap-2 p-2'>
            Student
            </Link>
              
          </button>
          <button className="rounded-lg bg-teal-700">
            <Link to={'/dashboard/teachdashboard'} className='flex gap-2 p-2'>
            Teacher
            </Link>
              
          </button>
    </div>
  )
}

export default Dashboard