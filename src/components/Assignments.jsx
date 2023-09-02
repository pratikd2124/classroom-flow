import React, { useState } from 'react'
import {Data} from "./data";
// import SubmitAssignmentPopUp from "./SubmitAssignmentPopUp";
import { useParams, Link,Outlet, useNavigate } from "react-router-dom";

const HomeworkCard = ({ homework }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 dark:text-gray-600">{homework.task}</h2>
      <p className="text-gray-600 mb-1">Submission Date: {homework.submission_date}</p>
      <p className="text-gray-600">Marks: {homework.marks}</p>
      <button className="p-2 rounded-lg bg-blue-700 text-white">Submit</button>
    </div>
  );
};

const SubjectCard = ({ subject }) => {
  return (
    <div className="bg-blue-100 dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 dark:text-white">{subject.Subject}</h2>
      <p className="text-gray-600 mb-1 dark:text-white">Teacher: {subject.Teacher}</p>
      <p className="text-gray-600">Last Update: {subject.lastupdate}</p>
      <div className="mt-4 space-y-4">
        {subject.Homework.map((homework) => (
          <HomeworkCard key={homework.id} homework={homework} />
        ))}
      </div>
    </div>
  );
};

const Assignments = () => {
  // const { id } = useParams();
    
  // const singleAssigment = Data.filter((a) => a.id === id);
  // const Dataobj = singleAssigment[0];

  

  console.log(Data);

  return (
    <>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Data.map((subject) => (
        <SubjectCard key={subject.id} subject={subject} />
      ))}
    </div>
    </>
  )
}


export default Assignments



  
