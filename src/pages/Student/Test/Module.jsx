import React from 'react'

const Module = () => {
    const mod = [
        { name: 'Module 1' },
        {name: 'Module 2'},
        {name: 'Module 3'},
        {name: 'Module 4'},
        {name: 'Module 5'},
        
    ]
    return (
        mod.map((data,index) => {
            <div key={index} className="w-80 rounded-xl bg-sky-900">
            <h2 className='text-xl font-bold'>
                {data.name}
            </h2>
      </div>
      })
      
  )
}

export default Module