import React from 'react'
import TaskIndividual from './TaskIndividual'

export default function Tasks() {
  return (
    <div className='w-[50%] h-[80%] bg-primary-color shadow-xl text-primary-complementary rounded-lg flex flex-col items-center dark:bg-gray-800'>
        <div className='w-[90%] h-[90%]'>
          <h1 className="font-semibold text-lg mt-4 ">Tasks</h1>
          <TaskIndividual/>
          <TaskIndividual/>
          <TaskIndividual/>
        </div>
        <button className='text-underline m-4 p-2 rounded-lg bg-blue-700'>
          View All
        </button>
    </div>
  )
}
