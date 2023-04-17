import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";
import SearchBar from "../components/search/SearchBar"
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
    

      <div style={{backgroundColor:'white'}}>
        <link rel="stylesheet" href="https://use.typekit.net/yba0jeu.css"/>
        
        {/*the top bar navigation */}

        <DashboardLayout/>
        <div style={{display:'flex', justifyContent:'center', backgroundColor:'white'}}>
          
        <div>
          <div style={{color:'black', margins:'auto', fontSize:'100px', justifyContent:'center', textAlign:'center', paddingTop:'200px'}}>
            CPP Fori
          </div>

          <SearchBar></SearchBar>
          </div>
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
    
  );
};

export default HomePage;
