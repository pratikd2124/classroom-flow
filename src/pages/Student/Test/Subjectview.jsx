import React,{useState} from 'react'
import { Data } from '../../../components/Testdata'
import { Link } from 'react-router-dom'
import Classroom from '../Classroom';

const Subjectview = ({ testtype }) => {
    
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleNavigateToNewComponent = () => {
      setShowNewComponent(true);
    };
    
  return (
      <>
          {
              Data.map((item, index) => {
                  return (
                      <>
                          <div className="flex flex-col px-3 py-4">
                              <h1 className="text-3xl m-2">
                                  {item.name} - {testtype}
                              </h1>
                              <hr></hr>
                              <div className="flex flex-wrap p-3">
                                {(() => {
                                const cards = [];
                                for (let i = 0; i < item.subjects.length; i++) {
                                    cards.push(
                                    
                                        <div className='w-80 m-4 rounded-xl pt-3 overflow-hidden shadow-xl bg-green-200' key={i}>
                                            <h2 className="text-xl  flex justify-center font-semibold text-gray-800">{item.subjects[i]}</h2>                        

                                            <div className="p-6 flex flex-col justify-center items-center">
                                            <button onClick={handleNavigateToNewComponent}                                                                                                                                                                                                                                   // Update the route according to your project structure
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                View Test
                                                </button>
                                                
                                            </div>
                                                
                                        </div>
                                    );
                                }
                                return cards;
                                  })()}
                                  {showNewComponent && <Classroom />} {/* Conditional rendering of NewComponent */}
    
                      </div>
                      </div>
                      </>
                  )
              }
              )
          }
      </>
  )
}

export default Subjectview