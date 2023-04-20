import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";
import SearchBar from "../components/search/SearchBar"
import SearchBar2 from "../components/courses/SearchBar"

import { Col, Container, Row } from 'react-bootstrap';
import student from "../components/weeklyScheduleExample.json";
import { flexbox } from "@mui/system";
import {isAuthenticated} from "../components/Login";



const StudentData = []




for (const x in student.courses){
  console.log((student.courses)[x])
  StudentData.push((student.courses)[x])
}



const HomePage = () => {
  
  const [switcher, setSwitcher] = useState(true);


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
          <div style={{display:'flex'}}>
            
            <button onClick={() =>setSwitcher(true)} style={{margin:'auto', textAlign:'center', width:'100px' , backgroundColor:'#343D46', borderRadius:'5px', color:'white', height:'40px'}}>Professor</button>
            <button onClick={() =>setSwitcher(false)} style={{margin:'auto', textAlign:'center', width:'100px' , backgroundColor:'#343D46', borderRadius:'5px', color:'white', height:'40px'}}>Courses</button>
          </div>

          {switcher? 
          (<SearchBar></SearchBar>)
          :
         ( <SearchBar2/>)}

          </div>
        </div>
        {/*
        <div className="table">
              {StudentData.map((props) => {
                  return ( 
                    <div style={{fontSize:'10px'}}>
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
                    </div>
                  )
                })}
            </div>    
        
              */  }
      </div>
    
  );
};

export default HomePage;
