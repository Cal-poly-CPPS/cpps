import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";
import SearchBar from "../components/search/SearchBar"
import { Col, Container, Row } from 'react-bootstrap';
import student from "../components/weeklyScheduleExample.json";
import { flexbox } from "@mui/system";
import {isAuthenticated} from "../components/Login";
import { useMediaQuery } from "react-responsive";



const StudentData = []




for (const x in student.courses){
  console.log((student.courses)[x])
  StudentData.push((student.courses)[x])
}



const HomePage = () => {
  
  const [isLogged, setisLogged] = useState(false);

  useEffect(() => { 

    setisLogged(isAuthenticated())
  }, []);

  const desktopScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const mobileScreen = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    

      <div style={{backgroundColor:'white'}}>
        <link rel="stylesheet" href="https://use.typekit.net/yba0jeu.css"/>
        
        {/*the top bar navigation */}

        <DashboardLayout/>
        {desktopScreen && <div style={{display:'flex', justifyContent:'center', backgroundColor:'white'}}>
        <div>
          <div style={{color:'black', margins:'auto', fontSize:'100px', justifyContent:'center', textAlign:'center', paddingTop:'200px'}}>
            CPP Fori
          </div>

          <SearchBar></SearchBar>
          </div>
          <div style={{width:'100px', height:'50px', overflow:'auto'}}>
        <div className="table default">
              {StudentData.map((props) => {
                  return ( 
                    <div className="row">
                      <div className="cell">
                        {props.courseName}
                      </div>
                      <div className="cell" style={{textAlign:'center'}}>
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
        </div>}
        
        {mobileScreen && <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', backgroundColor:'white', height:'100vh'}}>
        <div>
          <div style={{color:'black', margins:'auto', fontSize:'100px', textAlign:'center', paddingTop:'17vh', flexBasis:'50%', fontSize:'80px'}}>
            CPP Fori
          </div>
          <div style={{width:'100%', height:'25vh', overflow:'auto', display:'flex', justifyContent:'center'}}>
        <div className="table">
              {StudentData.map((props) => {
                  return ( 
                    <div className="row">
                      <div className="cell">
                        {props.courseName}
                      </div>
                      <div className="cell" style={{textAlign:'center'}}>
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
          <div style={{flexBasis:'100%'}}>
          <SearchBar></SearchBar>
          </div>
          </div>
        </div>}
   
      </div>
    
  );
};

export default HomePage;
