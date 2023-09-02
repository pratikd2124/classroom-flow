import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";

export default function Analytics() {


  var data = [
    {
      semester : "Semester 1",
      subject : ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5"],
      marks : [76, 34, 51, 62, 94 ],
      color : ['#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF']
    },
    {
      semester : "Semester 2",
      subject : ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5","Sub-6"],
      marks : [36, 54, 71, 42, 54 , 80],
      color : ['#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF']
    },
    {
      semester : "Semester 3",
      subject : ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5"],
      marks : [71, 84, 41, 82, 34 ],
      color : ['#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF']
    },
    {
      semester : "Semester 4",
      subject : ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5"],
      marks : [46, 80, 41, 90, 91 ],
      color : ['#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF']
    },
    {
      semester : "Semester 5",
      subject : ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5","Sub-6"],
      marks : [66, 94, 31, 72, 84 , 50],
      color : ['#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF']
    },
    {
      semester : "Semester 6",
      subject : ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5"],
      marks : [26, 64, 21, 72, 94 ],
      color : ['#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF']
    },
    {
      semester : "Semester 7",
      subject : ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5","Sub-6"],
      marks : [46, 34, 91, 22, 84 , 50],
      color : ['#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF']
    },
    {
      semester : "Semester 8",
      subject : ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5"],
      marks : [46, 84, 41, 32, 74 ],
      color : ['#1E40AF','#1E40AF','#1E40AF','#1E40AF','#1E40AF']
    },
  ]
  const [subject, setSubjects] = useState(data[0].subject)
  const [colors,setColors] = useState(data[0].color)
  const [marks,setMarks] = useState(data[0].marks)
  const [currentSelected, setCurrentSelected] = useState(0)

    var options = {
        series: [{
        data: marks,
        
      }],
        chart: {
        width: '100%',
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '10%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: subject,
        labels: {
          style: {
            colors: colors,
            fontSize: '12px'
          }
        }
      }
      };

      useEffect(()=>{
        setSubjects(data[currentSelected].subject)
        setColors(data[currentSelected].color)
        setMarks(data[currentSelected].marks)
      },[currentSelected])
  return (
    <div className='w-[70%] h-full dark:bg-gray-800 dark:text-white bg-primary-color text-gray-800 shadow-xl rounded-lg flex flex-col justify-evenly items-center'>
        <div className='w-full flex justify-between items-center p-3'>
            <h1 className="font-semibold text-lg">Analytics</h1>
            <div className='flex justify-between gap-2'>
                <select onChange={(e)=>{setCurrentSelected(e.target.value)}} className="w-30 border-2 border-gray-400 rounded" name="semester" id="">
                {
                  data?
                  data.map((data,i)=>
                    <option value={i} key={i}>{data.semester}</option>
                  )
                  :null
                }
                </select>
                <button className="w-24 h-8 rounded bg-accent-color text-accent-complementary" disabled>
                    Download
                </button>
            </div>
        </div>
        <div className='w-full h-80 flex justify-center items-center'>
            <Chart height="100%" width='100%' className='w-full' options={options} series={options.series} type="bar" />
        </div>
    </div>
  )
}
