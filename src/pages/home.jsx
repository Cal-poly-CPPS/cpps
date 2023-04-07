import React from "react";
import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";

import { Col, Container, Row } from 'react-bootstrap';
import student from "../components/weeklyScheduleExample.json";
import { flexbox } from "@mui/system";


const StudentData = []

for (const x in student.courses){
  console.log((student.courses)[x])
  StudentData.push((student.courses)[x])
}



const HomePage = () => {
  return (
    <DashboardLayout>
      <div style={{marginTop:'300px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div>
            <div className="titles">
              CPP Scheduler
            </div>
            <div className="buttons">
              Professors
            </div>
            <div className="buttons">
              Courses
            </div>
          </div>

        <div>
          
          <div className="table">
              {StudentData.map((props) => {
                  return ( 
                    <div className="row">
                      <div className="cell">
                        {props.courseName}
                      </div>
                      <div className="cell">
                        <>{props.courseTime[0]}</> <>-</> <>{props.courseTime[1]}</>
                      </div>
                      <div className="cell">
                        {props.courseNum}
                      </div>
                      <div className="cell">
                        <p>{props.courseProf}</p>
                      </div>
                    </div>
                  )
              })}
          </div>
        </div>

      </div>


      </div>
    </DashboardLayout>
  );
};

export default HomePage;
