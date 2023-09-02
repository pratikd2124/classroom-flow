import React, { useState } from 'react'
import  ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';


const OutcomeBasedTest = () => {
  const OutcomeBasedTest = [
    {
      id: 1,
      name: 'Laplace Transform',
      completed: 100,
      tests: 8,
      subOutcomeBasedTest: 5
    },
    {
      id: 2,
      name: 'Fourier Transform',
      completed: 58,
      tests: 5,
      subOutcomeBasedTest: 4
    },
    {
      id: 3,
      name: 'Z Transform',
      completed: 0,
      tests: 5,
      subOutcomeBasedTest: 5

    },
    {
      id: 4,
      name: 'Complex Variables',
      completed: 0,
      tests: 3,
      subOutcomeBasedTest: 3
    }
  ]

  const subOutcomeBasedTest =
  {
    1: [
      "Definition of Inverse Laplace Transform, Linearity property, Inverse Laplace Transform of standard functions, Inverse Laplace transform using derivatives",
      "Partial fractions method to find Inverse Laplace transform",
      "Inverse Laplace transform using Convolution theorem (without proof)"
    ],
    2: [
      "Dirichlet’s conditions, Definition of Fourier series and Parseval’s Identity (without proof).",
      "Fourier series of periodic function with period 2π and 2l.",
      "Fourier series of even and odd functions.",
      "Half range Sine and Cosine Series."
    ],
    3: [
      "Function f(z)of complex variable, Limit, Continuity and Differentiability off(z), Analytic function: Necessary and sufficient conditions for f(z) to be analytic (without proof).",
      "Cauchy-Riemann equations in Cartesian coordinates (without proof)",
      "Milne-Thomson method: Determine analytic function f(z)when real part (u), imaginary part (v) or its combination (u+v / u-v) is given",
      "Harmonic function, Harmonic conjugate and Orthogonal trajectories."
    ],
    4: [
      "Karl Pearson’s coefficient of correlation (r)",
      "Spearman’s Rank correlation coefficient (R)",
      "Lines of regression",
      "Fitting of first- and second-degree curves."
    ]
  }


  const [idx, setIndex] = useState(0)
  const [subOpen, setsubOpen] = useState(false)
  console.log(subOutcomeBasedTest[0])

  return (

    <div className='flex flex-wrap' >
      <div className='w-full flex'>
        <button className='px-4 py-1 text-sm m-1 rounded ms-auto me-10 mb-10 bg-black text-white'>View Tests</button>
      </div>

      {OutcomeBasedTest.map((module, index) => {
        return (
          <>

            <div key={index} className='w-full md:w-5/6 p-2' onClick={() => { setsubOpen(prev => prev ? false : true); setIndex(index) }}>
              <div className='bg-white dark:bg-[#c6fff7] text-black px-4 py-4 rounded-xl  m-2'>
                <div className='mx-1 mb-1 w-full text-md font-medium uppercase'>
                  Module {module.id}
                </div>
                <div className="mx-1 mb-6 w-3/4 text-sm font-medium">
                  {module.name}
                </div>
                <div className='flex flex-wrap justify-between mb-4'>
                  <div className='grid grid-cols-2 m-1 text-sm'>
                    <p className='font-medium pe-2 tracking-tight'>Compeleted :</p>
                    <p className=''>{module.completed}</p>
                  </div>
                  <div className='grid grid-cols-2 m-1 text-sm'>
                    <p className='font-medium pe-2 tracking-tight'>Tests :</p> {module.tests}
                  </div>
                  <div className='grid grid-cols-2 m-1 text-sm'>
                    <p className='font-medium pe-2 tracking-tight'>SubOutcomeBasedTest :</p> {module.subOutcomeBasedTest}
                  </div>
                  {
                    index === idx && (subOpen && <ChevronDownIcon className='h-10 w-10 transform rotate-180 z-10 text-2xl ' />)
                  }
                  {
                    (!subOpen && <ChevronDownIcon className='h-10 w-10  text-2xl z-10 animate-bounce' />)
                  }
                </div>
              </div>
            </div>
            {/* bg-[#161b2d] */}
            <div className='w-full pe-2 me-6'>

              {subOpen && index == idx && subOutcomeBasedTest[index + 1].map((subModule, subindex) => {
                return (
                  <div key={subindex} className='text-slate-200 bg-[#161b2d] mt-1 dark:text-slate-200 rounded-xl ms-6 md:w-3/4 w-5/6 p-2'>
                    <div className=' px-4 py-4 '>
                      <div className='mx-1 mb-1 w-full text-md font-medium uppercase'>
                        SubModule {subindex + 1}
                      </div>
                      <div className="mx-1 mb-6 w-3/4 text-sm font-medium">
                        {subModule}
                      </div>
                      <button className='px-4 py-1 text-sm m-1 rounded bg-black text-white'>Take a Test</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )
      })}



    </div>
  )

}

export default OutcomeBasedTest;

