import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import { Data } from './Testdata';

const Cards = () => {

  // const Data = [
  //   {
  //     subject: 'Blockchain',
  //     className: 'BE',
  //     Dept: 'computer',
  //     Description: 'lorem epson ovdk ihdvdv bidvkn',
  //     link: '/name'
  //   },
  //   {
  //     subject: 'Blockchain',
  //     className: 'BE',
  //     Dept: 'computer',
  //     Description: 'lorem epson ovdk ihdvdv bidvkn',
  //     link: '/name'
  //   },
  //   {
  //     subject: 'ML',
  //     className: 'BE',
  //     Dept: 'computer',
  //     Description: 'lorem epson ovdk ihdvdv bidvkn',
  //     link: '/name'
  //   },
  //   {
  //     subject: 'Project',
  //     className: 'BE',
  //     Dept: 'computer',
  //     Description: 'lorem epson ovdk ihdvdv bidvkn',
  //     link: '/name'
  //   },
  //   {
  //     subject: 'Cybersecurity',
  //     className: 'BE',
  //     Dept: 'computer',
  //     Description: 'lorem epson ovdk ihdvdv bidvkn',
  //     link: '/name'
  //   },
  //   {
  //     subject: 'NLP',
  //     className: 'BE',
  //     Dept: 'computer',
  //     Description: 'lorem epson ovdk ihdvdv bidvkn',
  //     link: '/name'
  //   },
  //   {
  //     subject: 'Data Science',
  //     className: 'BE',
  //     Dept: 'computer',
  //     Description: 'lorem epson ovdk ihdvdv bidvkn',
  //     link: '/name'
  //   },
  //   {
  //     subject: 'Artificial Intelligence',
  //     className: 'BE',
  //     Dept: 'computer',
  //     Description: 'lorem epson ovdk ihdvdv bidvkn',
  //     link: '/name'
  //   },
  // ];

  
  
  return (
      <>
          
            {/* <div classNameName="card w-80 h-60 glass p-4 mx-3">
                    <figure><img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="car!"/></figure>
                    <div classNameName="card-body">
                        <h2 classNameName="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div classNameName="card-actions justify-end">
                        <button classNameName="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
            </div> */}
      {
        Data.map((item, index) =>
        {
          return (
            <>
            
             
              {/*  */}
              <div key={index}
           className="relative max-w-sm h-72 rounded-lg bg-white bg-cover p-4 m-3 overflow-hidden  shadow-lg dark:bg-neutral-700 bg-image-url shadow-lg shadow-gray-900/50 dark:shadow-xl dark:hover:shadow-gray-700/60 
            transition ease-in-out hover:-translate-y-1 hover:scale-105 dark:hover:border dark:hover:border-sky-300"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg')`, // Replace 'your-image-url' with the actual image URL
                }}>
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="relative z-10 p-4">
                  <h5 className="mb-2 text-2xl font-bold text-neutral-800 text-white dark:text-neutral-50">
                  {item.name}
                  </h5>
                  <p className="mb-4 font-bold text-base text-neutral-600 text-white dark:text-neutral-200">
                    Year  :  { item.year} 
                  </p>
                  <p className='mb-4 text-base text-neutral-600 text-white dark:text-neutral-200'>
                    Subjects:
                    <div className="flex flex-wrap">
                        {(() => {
                          const badges = [];
                          for (let i = 0; i < item.subjects.length; i++) {
                            badges.push(
                              <span
                                key={i}
                                className="inline-block bg-indigo-100 text-indigo-700 px-2 py-1 text-xs font-medium rounded-full mr-2 mb-2"
                              >
                                {item.subjects[i]}
                              </span>
                            );
                          }
                          return badges;
                        })()}
                      </div>

                  </p>
                  <button className="inline-block rounded bg-sky-700 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init>
                  <a href={"/classroomdash"}>View</a>
                  </button>
                </div>
                </div>

            

            </>
          )
          }
          
          
        )
      }
      {/* <div classNameName="card w-80 m-3 bg-base-100  image-full shadow-lg shadow-gray-900/50 dark:shadow-xl dark:hover:shadow-gray-700/60 transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <figure><img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="Shoes" /></figure>
          <div classNameName="card-body">
            <h2 classNameName="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div classNameName="card-actions justify-end">
              <button classNameName="btn btn-primary">Buy Now</button>
            </div>
          </div>
      </div> */}
      
        
      
      {/* <div classNameName="card w-96 bg-primary shadow-xl image-full p-4">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div classNameName="card-body">
          <h2 classNameName="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div classNameName="card-actions justify-end">
            <button classNameName="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
      </>
  )
}

export default Cards