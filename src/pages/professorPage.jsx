import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";

import { Col, Container, Row } from 'react-bootstrap';
import student from "../components/weeklyScheduleExample.json";
import { flexbox } from "@mui/system";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

import ReactStars from "react-rating-stars-component";





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
        <div>
            <div>
                <button>{useSearchParams.get}</button>

                <div>
                    <ReactStars

                        count={10}
                        color={"white"}
                        activeColor={"gray"}

                    >


                    </ReactStars>
                </div>
            </div>
            <div>
            
            </div>
        </div>
    </DashboardLayout>
  );
};

export default ProfessorPage;
