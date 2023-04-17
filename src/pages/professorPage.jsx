import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";

import { Col, Container, Row } from 'react-bootstrap';
import student from "../components/weeklyScheduleExample.json";
import { flexbox } from "@mui/system";
import React, { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from "react-router-dom";

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
    const [loading, setLoading] = useState(true);



    //for the bar
    const [bar1, setBar1] = useState(0);
    const handleChange = (event) => {
      setBar1(event.target.value);
    }
    const fillWidth = (bar1 / 10) * 100;




    const [data, setData] = useState([]);

    
    useEffect(() => { 
      console.log(data);
      async function fetchData() {
        const response = await fetch('https://pgmflm8t6g.execute-api.us-west-2.amazonaws.com/cpps/cpps/'.concat(searchParams.get("name")),{mode: 'cors'});
        const data = await response.json();
        setData(data);
        setLoading(false);
        
      }
      fetchData();
    }, []);


    console.log('https://pgmflm8t6g.execute-api.us-west-2.amazonaws.com/cpps/cpps/'.concat(searchParams.get("name")));
    //console.log(data);
      
  return (
    <div>
      
    {loading ? (
      <DashboardLayout><p>Loading...</p></DashboardLayout>
        
      ) : (
        <div style={{display:'flex'}}>
          <DashboardLayout/>
          <div style={{width:'60%'}}>
          <div style={{display:'flex'}}>
            <div style={{ paddingLeft:'10%', height:'80%', borderRadius:'10px', height:'500px', backgroundColor:'white', paddingTop:'100px'}}>
                
                {/*div */}
                <div style={{display:'flex'}}>
                  <div>
                    <div style={{width:'100%', backgroundColor:'white'}}> 
                        <div style={{fontSize:'50px', justifyContent:'left', paddingLeft:'0px'}}>{searchParams.get("name")}</div>
                        {" "}
                        <div style={{margin: '7.5px'}}>{PageLoad(1,0)[2]}</div>
                        {/* <p>{PageLoad(0,0)[0].courses}</p> */}
                        {'\n\n'}
                    </div>
                    <div className='statisticsBox'>

                        <div>Ratings: {JSON.stringify(data.Item.Attribute.L[0].N).replace(/\"/g, "")}/10</div>
                        <div>Difficulty: {JSON.stringify(data.Item.Attribute.L[1].N).replace(/\"/g, "")}/10</div>
                        <div>Lectures: {JSON.stringify(data.Item.Attribute.L[2].N).replace(/\"/g, "")}/10</div>
                        <div>Textbook: {JSON.stringify(data.Item.Attribute.L[3].N).replace(/\"/g, "").replace("1", "Yes").replace("0", "No")}</div>
                    </div>
                  </div>
                  <div style={{paddingLeft:'10px', paddingTop:'10px'}}>
                    <NavLink to={'../ProfessorRating/?name='.concat(searchParams.get("name"))}><button style={{fontSize:'20px', justifyContent:'left', paddingLeft:'0px', borderRadius:'20px', padding:'10px'}}>Rate This Professor</button></NavLink>
                  </div>
                  <div style={{height:'50%', overflow:'auto'}}>
                    <div style={{whiteSpace:"pre-wrap", paddingLeft:'50px'}}>
                                <div style={{display:'flex', }}>
                      
                                <p>Course</p>
                                <p style={{paddingLeft:'30px'}}>Average GPA</p>
                                <p style={{paddingLeft:'20px'}}>Number of Grades</p>
                                </div>         
                    </div>

                    <div style={{whiteSpace:"pre-wrap", paddingLeft:'50px'}}>
                              {data.Item.Courses.L.map(item => (
                                <div style={{display:'flex', }}>
                      
                                <p>{item.L[0].S}</p>
                                <p style={{paddingLeft:'50px'}}>{item.L[1].N}</p>
                                <p style={{paddingLeft:'110px'}}>{item.L[2].N}</p>
                                </div>
                              ))}
                              
                    </div>
                  </div>
                </div>
            </div>




          </div>
            
          <div style={{overflow:'auto', height:'40%'}}>
          {data.Item.Reviews.L.map((user) => (
            <div style={{display:'flex', justifyContent:'left', paddingLeft:'100px'}}>
              <div className='circle-box'>
                <div className = 'semi-circle-top'>
                  <div className='center'>
                    {user.L[2].N}
                  </div>
                </div>
                <div className = 'semi-circle-bottom'>
                  <div className='center'>
                    {user.L[3].N}
                  </div>
                </div>
              </div>
            <div style={{paddingLeft:'20px', display:'grid', width:'40%'}}>
              <p>{"Course: "}{user.L[0].S}</p>
              <p>{user.L[1].S}</p>
            </div>  
              
            </div>
          ))}

          </div>
          </div>

          
          <div style={{paddingTop:'100px', width:'40%'}}>
            <div style={{color:'black', fontSize:'50px', width:'100%'}}>
              Files of interest
            </div>
          </div>



      </div>
          )}
    </div>
  );
};

export default ProfessorPage;
