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
      <div style={{}}>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div>
            <div className="titles">
              CPP Data
            </div>
            <div className="buttons">
              Professors
            </div>
            <div className="buttons">
              Courses
            </div>
          </div>

        <div>
          
          <div>
            <Row className="classes">
              {StudentData.map((props) => {
                  return ( 
                      <Col sm={10} md={15} className='mt-3'>
                          <div style={{backgroundColor:'black', borderColor:'white', width:'30vw'}}>
                              <div style={{display:'flex', borderColor:'white', borderWidth:'2px', borderStyle:'solid'}}>
                            
                                <p style={{marginLeft:'2px', fontWeight:'500', width:'150px'}}>{props.courseName}</p>
                              
                                <p style={{marginLeft:'5px', display:'flex'}}><>{props.courseTime[0]}</><> to</> {props.courseTime[1]}</p>
                                <p style={{marginLeft:'5px'}}>{props.courseNum}</p>
                                <p style={{marginLeft:'5px'}}>{props.courseProf}</p>
                            
                              </div>
                          </div>
                      </Col>
                  )
              })}
            </Row>
          </div>
        </div>

      </div>


      </div>
    </DashboardLayout>
  );
};

export default HomePage;
