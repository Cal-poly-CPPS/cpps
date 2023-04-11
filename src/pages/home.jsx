import React from "react";
import { Link } from 'react-router-dom';
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
      <div style={{marginTop:'7.5vh'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div className="background-div"></div>
          <div style={{}}>
            <div className="titles">
              CPP Scheduler
            </div>
            <div className="buttons">
              <Link style={{textDecoration:'none', color:'black'}} to="/professors">
                Professors
              </Link>
            </div>
            <div className="buttons">
              <Link style={{textDecoration:'none', color:'black'}} to="/courses">
                Courses
              </Link>
            </div>
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
