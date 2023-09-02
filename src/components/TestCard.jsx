import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const TestCard = () => {

    const Test = [
        {
          "testname": "Machine Learning",
          "category": "True or False",
          "level": "easy",
          "duration": "30 min",
          "score": "20",
          "authorid": "Sheela Gupta"
        },
        {
          "testname": "Cybersecurity",
          "category": "Descriptive",
          "level": "medium",
          "duration": "30 min",
          "score": "20",
          "authorid": "Jay Shah"
        },
        {
          "testname": "Data Structures",
          "category": "MCQ - multiple correct",
          "level": "medium",
          "duration": "30 min",
          "score": "20",
          "authorid": "Priya Sharma"
        },
        {
          "testname": "Blockchain",
          "category": "MCQ - single correct",
          "level": "hard",
          "duration": "30 min",
          "score": "20",
          "authorid": "Ramesh Pawar"
        },
        {
          "testname": "Artificial Intelligence",
          "category": "MCQ - multiple correct",
          "level": "medium",
          "duration": "45 min",
          "score": "25",
          "authorid": "Amit Patel"
        },
        {
          "testname": "Network Security",
          "category": "MCQ - single correct",
          "level": "medium",
          "duration": "40 min",
          "score": "20",
          "authorid": "Neha Verma"
        },
        {
          "testname": "Web Development",
          "category": "MCQ - single correct",
          "level": "easy",
          "duration": "20 min",
          "score": "15",
          "authorid": "Rajesh Kumar"
        },
        {
          "testname": "Operating Systems",
          "category": "MCQ - multiple correct",
          "level": "medium",
          "duration": "35 min",
          "score": "22",
          "authorid": "Sanjay Mehta"
        },
        {
          "testname": "Database Management",
          "category": "True or False",
          "level": "hard",
          "duration": "50 min",
          "score": "30",
          "authorid": "Mita Patel"
        },
        {
          "testname": "Software Engineering",
          "category": "Descriptive",
          "level": "medium",
          "duration": "40 min",
          "score": "25",
          "authorid": "Anuj Sharma"
        },
        {
          "testname": "Computer Networks",
          "category": "MCQ - multiple correct",
          "level": "hard",
          "duration": "45 min",
          "score": "28",
          "authorid": "Vikram Singh"
        },
        {
          "testname": "Machine Learning II",
          "category": "MCQ - single correct",
          "level": "medium",
          "duration": "35 min",
          "score": "18",
          "authorid": "Priyanka Gupta"
        },
        {
          "testname": "Artificial Neural Networks",
          "category": "MCQ - single correct",
          "level": "hard",
          "duration": "30 min",
          "score": "22",
          "authorid": "Rohan Kumar"
        },
        {
          "testname": "Mobile App Development",
          "category": "Descriptive",
          "level": "easy",
          "duration": "25 min",
          "score": "15",
          "authorid": "Sneha Sharma"
        },
        {
          "testname": "Algorithms",
          "category": "True or False",
          "level": "medium",
          "duration": "40 min",
          "score": "24",
          "authorid": "Akash Singh"
        },
        {
          "testname": "Cloud Computing",
          "category": "MCQ - multiple correct",
          "level": "medium",
          "duration": "35 min",
          "score": "21",
          "authorid": "Nisha Patel"
        },
        {
          "testname": "Digital Electronics",
          "category": "MCQ - single correct",
          "level": "easy",
          "duration": "20 min",
          "score": "12",
          "authorid": "Vivek Mehta"
        },
        {
          "testname": "Ethical Hacking",
          "category": "MCQ - multiple correct",
          "level": "hard",
          "duration": "50 min",
          "score": "28",
          "authorid": "Riya Gupta"
        },
        {
          "testname": "Software Testing",
          "category": "Descriptive",
          "level": "medium",
          "duration": "45 min",
          "score": "26",
          "authorid": "Rahul Verma"
        },
        {
          "testname": "IoT - Internet of Things",
          "category": "MCQ - single correct",
          "level": "medium",
          "duration": "40 min",
          "score": "20",
          "authorid": "Anita Mehta"
        }
    ]
    
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedTestname, setSelectedTestname] = useState('');
    
    const filteredTests = Test.filter(test => {
        const categoryMatch = !selectedCategory || test.category === selectedCategory;
        const levelMatch = !selectedLevel || test.level === selectedLevel;
        const testnameMatch = !selectedTestname || test.testname === selectedTestname;
        return categoryMatch && levelMatch && testnameMatch;

      });
      
  return (
      <>
          <div className='flex flex-col w-88 '>
              <div className='flex justify-around'>
              <div className="mb-4">
            <label htmlFor="category" className="block text-base-700">
            Filter By Category:
            </label>
            <select
            id="category"
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            >
            <option value="">All</option>
            <option value="Descriptive">Descriptive</option>
            <option value="MCQ - multiple correct">MCQ - multiple correct</option>
            <option value="MCQ - single correct">MCQ - single correct</option>
            <option value="True or False">True or False</option>
            </select>
          </div>

          <div className="mb-4">
                <label htmlFor="level" className="block text-base-700">
                Filter By Level:
                </label>
                <select
                id="level"
                className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                >
                <option value="">All</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                </select>
          </div>
          
          <div className="mb-4">
                <label htmlFor="testname" className="block text-base-700">
                Filter By Test Name:
                </label>
                <select
                id="testname"
                className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                value={selectedTestname}
                onChange={(e) => setSelectedTestname(e.target.value)}
                >
                <option value="">All</option>
                {Test.map((test, index) => (
                    <option key={index} value={test.testname}>
                    {test.testname}
                    </option>
                ))}
                </select>
              </div>
         </div>
              
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"  >
          {
              filteredTests.map((data) => {
                  return(
                      <>
                         

                        <div className="w-full m-4 rounded-xl pt-3 overflow-hidden shadow-xl bg-green-200">
                        
                        <div className="pl-12 py-6">
                            <h2 className="text-3xl m-0 font-semibold text-gray-800">{data.testname}</h2>
                            <p className="text-gray-800 mt-2">{ data.authorid}</p>
                            <p className="text-gray-600 text-sm mt-2">Date: August 25, 2023</p>
                        </div>
                        <div className='flex justify-around mx-4'>
                            <div className="px-6">
                                <p className="text-neutral-900 font-medium mt-2">Duration : { data.duration}</p>
                                <p className="text-neutral-800 font-medium mt-2">Score : { data.score}</p>
                            </div>
                            <div className="flex flex-col items-center px-4">
                            <span className="inline-block m-2 bg-blue-500/20 text-purple-700 text-xs font-semibold rounded-full px-3 py-1 ">
                            { data.level}
                            </span>
                            <span className="inline-block bg-green-500 text-white text-xs font-semibold rounded-full px-3 py-1">
                            { data.category}

                            </span>
                        </div>    
                            
                        </div>
                        <div className="p-6 flex flex-col justify-center items-center">
                        {data.category === 'Descriptive' && (
                            <Link
                            to={`/descriptive`} // Update the route according to your project structure
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                            Take Test
                            </Link>
                        )}
                        {data.category === 'MCQ - multiple correct' && (
                            <Link
                            to={`/multiple`} // Update the route according to your project structure
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                            Take Test
                            </Link>
                        )}
                                  {data.category === 'True or False' && (
                                        <Link
                                        to={`/true-false`} // Update the route according to your project structure
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                        Take Test
                                        </Link>
                                    )}
                                    {data.category === 'MCQ - single correct' && (
                                        <Link
                                        to={`/jointest`} // Update the route according to your project structure
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                        Take Test
                                        </Link>
                                    )}
                                  </div>
                              
                        </div>

                      </>
                  )
              })
      }
          </div>
          </div>
        
          
          
          
        

      </>
  )
}

export default TestCard