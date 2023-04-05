import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";

import { Col, Container, Row } from 'react-bootstrap';
import student from "../components/weeklyScheduleExample.json";
import { flexbox } from "@mui/system";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

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

const ProfessorPage = () => {
    //gets name from url
    
    //asks AWS for the name
    const [searchParams, setSearchParams] = useSearchParams();
    
    

    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => { 
        console.log("logging this here")
        

    fetch('https://pgmflm8t6g.execute-api.us-west-2.amazonaws.com/cpps/cpps/'.concat(searchParams.get("name")),{mode: 'cors'})
        .then(response => response.json())
        .then(data => setData(data));
    }, [])


    //console.log('https://pgmflm8t6g.execute-api.us-west-2.amazonaws.com/cpps/cpps/'.concat(searchParams.get("name")));
       console.log(data);

    const [test, setTest]=useState([]);
    
    //setTest(JSON.stringify(data));

      
  return (
    <DashboardLayout>
        <div className = 'outbox'>
            <div className='topBox'>
                <div className='generalInfoBox'> 
                    <div className='professorName'>{PageLoad(1,0)[0].name}</div>
                    {" "}
                    <div style={{margin: '7.5px'}}>{PageLoad(1,0)[2]}</div>
                    {/* <p>{PageLoad(0,0)[0].courses}</p> */}
                    {'\n\n'}
                    <div>
                        {PageLoad(0,0)[0].courses.map((course) => (
                        <div>
                            {course}{'\n'}
                        </div>
                        ))}
                    </div>
                </div>
                <div className='statisticsBox'>
                    <div>Ratings: (teacher rating average)/10</div>
                    <div>Difficulty: (difficulty rating average)/10</div>
                    <div>Lectures: (lecture rating average)/10</div>
                    <div>Textbook: (mandatory or not)</div>
                </div>
                <button className='buttonProp'>Rate This Professor</button>
            </div>
            <div className='break'></div>
            
            

          {PageLoad(1,0)[1].map((user) => (
            <div className = 'inbox'>
              <div className='circle-box'>
                <div className = 'semi-circle-top'>
                  <div className='center'>
                    {user.rating}
                  </div>
                </div>
                <div className = 'semi-circle-bottom'>
                  <div className='center'>
                    {user.difficulty}
                  </div>
                </div>
              </div>
              
            <div className='inbox'>
              {"Course: "}{user.courseTaken}
              <p>{user.review}</p>
            </div>  
              
            </div>
          ))}
      </div>
    </DashboardLayout>
  );
};

export default ProfessorPage;
