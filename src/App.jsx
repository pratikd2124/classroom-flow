import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Router,Route , Routes } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './components/Dashboard'
import StudentDashboard from './pages/Student/StudentDashboard'
import Classroom from './pages/Student/Classroom'
import Navigation from './pages/Student/ClassroomDashboard/Navigation'
import DashboardClass from './pages/Student/ClassroomDashboard/DashboardClass'
import Test from './pages/Student/ClassroomDashboard/Test'
import Assignments from './components/Assignments'


function App() {
  

const Attendance = () => <div>Attendance Page</div>;
const Result = () => <div>Result Page</div>;
const Chat = () => <div>Chat Page</div>;
const Notices = () => <div>Notices Page</div>;

  return (
    <>
      
      <Routes>

        <Route path='/' element={<Layout/>}>
          {/* student */}
          <Route path="dashboard" element={<Dashboard key={Math.random()}/>} >
            
          </Route>
          <Route path="dashboard/studdashboard" element={<StudentDashboard key={Math.random()}/>} />
          <Route path="classroom" element={<Classroom key={Math.random()} />} />
    
          {/* student */}
          
           {/* classroom */}
           
          <Route path='classroomdash' element={<Navigation />} >
            <Route index element={<DashboardClass key={Math.random()} />} />
            <Route path="test" element={<Test key={Math.random()} />} />
            <Route path="assignment" element={<Assignments key={Math.random()} />} />
            <Route path="classroomdash/attendance" component={Attendance} />
            <Route path="classroomdash/result" component={Result} />
            <Route path="classroomdash/chat" component={Chat} />
            <Route path="classroomdash/notices" component={Notices} />
          </Route>
          
          
            {/*  */}
      </Route>
      
        {/* teacher */}
        <Route path="dashboard" element={<Dashboard />} >
            
        </Route>
        {/* teacher */}

      </Routes>

      
    </>
  )
}

export default App
