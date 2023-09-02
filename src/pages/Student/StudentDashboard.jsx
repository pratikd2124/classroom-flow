import Tasks from "../../components/Tasks";
import Analytics from "../../components/Analytics";
import Attendance from "../../components/Attendance";
import StudentInfo from "../../components/StudentInfo";



export default function StudentDashboard() {
  return (
    <div className="w-full h-full flex flex-col  justify-between items-center">
      <div className="w-full flex lg:flex-row md:flex-col sm:flex-col justify-evenly px-[10px] items-center">
        <div className="w-full flex justify-evenly items-center lg:flex-row md:flex-col sm:flex-col">
          <Attendance />
          <Tasks/>
        </div>
      <StudentInfo/>
      </div>
      <Analytics />
      
      
    </div>
  )
}
