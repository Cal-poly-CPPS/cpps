import "./home.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";

import { Col, Container, Row } from 'react-bootstrap';
import student from "../components/weeklyScheduleExample.json";
import { flexbox } from "@mui/system";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

import "./ProfessorRating.css";
//used this library https://www.npmjs.com/package/react-rating-stars-component for stars





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

    const ReviewForm = () => {
        const ratingChanged = (newRating) => {
        // Handle rating change logic here
        console.log(newRating);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
        
            // Reset error state
            setError(null);
        
            // API call to submit review
            setIsLoading(true);
            axios
              .post("/api/rateProfessor", { review })
              .then((response) => {
                setIsLoading(false);
                // Handle success, e.g. show success message to user
                console.log("Review submitted successfully!");
              })
              .catch((error) => {
                setIsLoading(false);
                // Handle error, e.g. set error state and display error message to user
                setError("Failed to submit review. Please try again later.");
                console.error("Failed to submit review:", error);
              });
          };


          return (
            <div>
              <DashboardLayout>
                <div className="container">
                  <h1>Rate Professor</h1>
                  <p>Write a review for your professor</p>
                  <div className="formContainer">
                    <div className="formBox">
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="reviewInput">Write your review</label>
                        <textarea
                          id="reviewInput"
                          className="reviewInput"
                          placeholder="Enter your review here..."
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                        />
                        <div className="submitBtn">
                          <button type="submit" className="btn">
                            {isLoading ? "Submitting..." : "Submit"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
          
                <div className="page">
                  <div className="professorName">
                    <h1 style={{color: "black"}}>Professor A</h1>
                  </div>
          
                  <div className="enteringStars">
                    <div className="starsGroup">
                      <button className="buttons-stars" disabled>Difficulty</button>
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
                      <button className="buttons-stars" disabled>Lecture</button>
                      <div className="stars">
                        <ReactStars
                          count={10}
                          onChange={ratingChanged}
                          size={20}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
          
                    <div className="enteringGrades">
                      <div className="starsGroup">
                        <div className="gradeText">Your Grade</div>
                        <div className="stars">
                          <input className="gradeInput" placeholder="Enter here..." />
                        </div>
                      </div>
          
                      <div className="starsGroup">
                        <div className="gradeText">Courses</div>
                        <div className="stars">
                          <input className="gradeInput" placeholder="Enter here..." />
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="reviews">
                    <div>
                      <h2>Review</h2>
                    </div>
          
                    <div className="writtenRatings">
                      <form /*onSubmit={function}*/>
                        <div>
                          <textarea placeholder="Type Here..."></textarea>
                        </div>
                        <button className="buttons-stars" type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
          
                {isLoading && <div className="loading">Loading...</div>}
                {error && <div className="error">{error}</div>}
              </DashboardLayout>
            </div>
          );
          }

/*
  return (

    <div>
    <DashboardLayout>
        <div className="page">
            
            <div className=" professorName">
                <h1 color="black">Professor A</h1>

            </div>


            <div className="enteringStars">
                <div className="starsGroup">
                    <button className="buttons-stars" disabled>Difficulty</button>
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
                    <button className="buttons-stars" disabled>Lecture</button>
                    
                    <div className="stars">
                        <ReactStars
                        count={10}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#ffd700"
                        />
                    </div>
                </div>

                <div className="enteringGrades">
                    <div className="starsGroup">
                        <div className="gradeText">Your Grade</div>
                        
                        
                        <div className="stars">
                            <input className="gradeInput" placeholder="Enter here..."></input>
                        </div>
                    </div>

                    <div className="starsGroup">
                        <div className="gradeText">Courses</div>
                        
                        <div className="stars">
                            <input className="gradeInput" placeholder="Enter here..."></input>
                        </div>
                    </div>
                </div>

            </div>


            <div className = "reviews">
                

                <div>
                    <h2>Review</h2>
                </div>

                <div className="writtenRatings">
                    
                    <form /*onSubmit={function}*//*>
                        <div>
                            <textarea placeholder="Type Here..."></textarea>
                        </div>

                        <button className = "buttons-stars " type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </DashboardLayout>
    
    </div>
  );*/
};


export default ProfessorRating;
