import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";

import { Col, Container, Row } from 'react-bootstrap';
import student from "../components/weeklyScheduleExample.json";
import { flexbox } from "@mui/system";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

import ReactStars from "react-rating-stars-component";

import "./professorPage.css";




const ProfessorRating = () => {
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


    const ratingChanged = (newRating) => {
        console.log(newRating);
        };


      
  return (

    <div>
    <DashboardLayout>
        <div className="page">
            <div>
                <h1 color="black">Professor A</h1>

            </div>




            <div className="enteringStars">
                <div className="starsGroup">
                    <button className="buttons-stars">Difficulty</button>
                    <div className="stars">
                        <ReactStars
                        count={10}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#ffd700"
                        />
                    </div>
                </div>
                <div className="starsGroup">
                    <button className="buttons-stars">Lecture</button>
                    
                    <div className="stars">
                        <ReactStars
                        count={10}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>


            <div className = "reviews">

                <div>
                    <h2>Review</h2>
                </div>

                <div className="writtenRatings">
                    
                    <form /*onSubmit={function}*/>
                        <div>
                            <textarea placeholder="Type Here..."></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </DashboardLayout>
    
    </div>
  );
};

export default ProfessorRating;
