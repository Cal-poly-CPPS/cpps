import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";

import { Col, Container, Row } from 'react-bootstrap';
import student from "../components/weeklyScheduleExample.json";
import { flexbox } from "@mui/system";
import React, { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from "react-router-dom";
import SearchBar2 from "../components/courses/SearchBar"

import ProfessorData from  './professorData.json';
import ProfessorRatings from './professorRatings.json';
import './professorPage.css';

function PageLoad(dept, prof) {
    const professorObj = [
      ProfessorData[dept].professors[prof], 
      ProfessorRatings.departments[dept].professors[prof].ratings,
      ProfessorData[dept].deptName
    ];
    return(professorObj);
}

const Classes = () => {
    //gets name from url
    
    //asks AWS for the name
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);



    //for the bar
    const [bar1, setBar1] = useState(0);
    const handleChange = (event) => {
      setBar1(event.target.value);
    }
    const fillWidth = (bar1 / 10) * 100;




    const [data, setData] = useState([]);

    const[isEmpty, setEmpty] = useState(true);

    
    useEffect(() => {
      console.log(data);
      async function fetchData() {
        const response = await fetch('https://pgmflm8t6g.execute-api.us-west-2.amazonaws.com/cpps/courses/'.concat(searchParams.get("name").replace(" ", "_")),{mode: 'cors'});
        const data = await response.json();
        console.log(JSON.stringify(JSON.parse(data.Item.data.S.replace(/'/g, "\" ").replace(/None/g, "\"None\" "))[0]))
        setData(data);
        setLoading(false);
        console.log(data);
        

      }
      fetchData();
    }, [searchParams.get("name")]);


    console.log('https://pgmflm8t6g.execute-api.us-west-2.amazonaws.com/cpps/courses/'.concat(searchParams.get("name").replace(" ", "_")));
    //console.log(data);
      
  return (
    <div>
           
    {loading ? (
      <DashboardLayout><p>Loading...</p></DashboardLayout>
        
      ) : (
  <div style={{display:'flex'}}>
    <DashboardLayout/>
      <div style={{paddingTop:'100px', width:'80%'}}>
        <div>
        <div>
          Course number
        </div>
        {(JSON.parse(data.Item.data.S.replace(/'/g, "\" ").replace(/None/g, "\"None\" "))).map((user) => (
          <div style={{display:'flex'}}>
            <div style={{paddingLeft:'50px', width:'110px'}}>
              
              {user[' classNumber']}
            </div>
            <div style={{paddingLeft:'50px', width:'300px'}}>
              
              {user[' courseProf']}
            </div>
            <div style={{paddingLeft:'50px', width:'100px'}}>
              
              {Math.round(user[' averageGPA'] * 100) / 100}
            </div>
            <div style={{paddingLeft:'50px', width:'200px', display:"flex"}}>
              <div>
              {user[' courseDays']}
              </div>
              
            </div>
            <div style={{paddingLeft:'50px', display:'flex'}}>
              <div style={{width:'40px'}}>
                {user[' courseTime'][0]}
              </div>
              <div>
                -
                </div>
              <div>
                {user[' courseTime'][1]}
              </div>
            </div>
           
          </div>
        ))}
        
      
        
        </div>
      </div>

      <div style={{paddingTop:'100px', width:'30%', borderLeft:'solid'}}>
            <div style={{color:'black', fontSize:'50px', width:'100%'}}>
              <div style={{marginLeft:'30%'}}>Search</div>
              <div style={{position:'relative', top:'-25px'}}>
              <SearchBar2></SearchBar2>
              </div>
            </div>
          </div>

  </div>

  )}
  </div>
  )

      }

export default Classes;