import { useEffect, useState } from "react";
import Chart from "react-apexcharts";


export default function Attendance() {
    const [series, setSeries] = useState([75, 25])
    var options = {
        series: series,
        legend: {
          show: false,
        },
        colors: ['#1E40AF', '#F1F5F9'],
        labels: ['Attended', 'Absent'],
        chart: {
        type: 'donut',
        animations : {
            enabled : false,
        },
        width: '100%',
        toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: 'zoom' 
          },
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
 
        }
      },

      dataLabels : {
        enabled : false,
    },
    
      responsive: [{
        breakpoint: 480,
        options: {

          legend: {
            position: 'bottom'
          }
        }
      }]
      };

      const [attendance, setAttendance] = useState([
        {
        semester : 'Semester 1',
        attendance : 78
        },
        {
          semester : 'Semester 2',
          attendance : 68
        },
        {
          semester : 'Semester 3',
          attendance : 38
        },
        {
          semester : 'Semester 4',
          attendance : 46
        },
        {
          semester : 'Semester 5',
          attendance : 68
        },
        {
          semester : 'Semester 6',
          attendance : 58
        },
        {
          semester : 'Semester 7',
          attendance : 75
        },
        {
          semester : 'Semester 8',
          attendance : 18
        }
      ])
      const [currentSelected, setCurrentSelected] = useState(0)

      useEffect(()=>{
        setSeries([attendance[currentSelected].attendance, 100 - attendance[currentSelected].attendance])
      },[currentSelected])

  return (
    <div className="w-[30%] h-[50%] bg-primary-color text-primary-complementary shadow-lg rounded-lg flex justify-center items-center dark:bg-gray-800 ">
        <div className="w-full h-[90%] flex flex-col justify-evenly items-center
                        md:h-[80%]">
            <div className="w-full flex justify-between items-center p-4">
                <h1 className="font-semibold text-lg">Attendance</h1>
                <select onChange={(e)=>{setCurrentSelected(e.target.value)}} className="w-30 border-2 border-gray-400 rounded" name="semester" id="">
                {
                  attendance?
                  attendance.map((data,i)=>
                    <option value={i} key={i}>{data.semester}</option>
                  )
                  :null
                }
                </select>
            </div>
            <div className="w-full h-40 flex justify-center items-center
            md:h-30">
                <Chart width="100%" height="150%" className='w-full h-full' options={options} series={options.series} type="donut" />
            </div>
            
        </div>
    </div>
  )
}
