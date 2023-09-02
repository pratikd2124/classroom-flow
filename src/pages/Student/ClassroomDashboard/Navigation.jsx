import React from 'react';
import { BrowserRouter as Router, Route, Link,Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <ul className="space-y-2">
        <li>
          <Link to="/classroomdash">Dashboard</Link>
        </li>
        <li>
          <Link to="test">Test</Link>
        </li>
        <li>
          <Link to="assignment">Assignment</Link>
        </li>
        <li>
          <Link to="attendance">Attendance</Link>
        </li>
        <li>
          <Link to="result">Result</Link>
        </li>
        <li>
          <Link to="chat">Chat</Link>
        </li>
        <li>
          <Link to="notices">Notices</Link>
        </li>
      </ul>
    </nav>
  );
};


const Navigation = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-4/5 p-4">
        {/* Main content */}
        <Outlet/>
      </div>
    </div>
  );
};


// const Navigation = () => {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="w-4/5 p-4">
//           <Outlet/>
//         </div>
//       </div>
//     </Router>
//   );
// };

export default Navigation;
