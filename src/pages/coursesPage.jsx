import "./home.css"
import { DashboardLayout } from "../components/Layout";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import './coursesPage.css';

//backend part to link with information

const CoursesPage = () => {
    //filled with dummy data, but the styles will be defined for future use
    return(
        <DashboardLayout>
            <div className='backgroundBox'>
                <div className='title'>
                    (Import Class Name)
                </div>
                <div className='divider'></div>
                <div className='bottomHalf'>
                    <div className='infoSideBar'>
                        <button className='backButton'>Back</button>
                        <div>What You Can Upload</div>
                        <div className='subText'>
                            <div>YOUR notes</div>
                            <div>Non-copyright Materials</div>
                            <div>Tests with the professor's permission</div>
                            <div>Blank Homework with the professor's permission</div>
                            <div>Links to related materials</div>
                        </div>
                    </div>
                    <div className='interactiveCenter'>
                        {/* For these backend can change the application? haha of course let us know if we need to change the styles */}
                        <button className='uploadButton'>Upload Your Content Here</button>
                        <div className='dropAndDrag'>Drop Here</div>
                        <div className='rowStyle'>
                            <button className='checkBox'></button>
                            <div>I have read the terms and conditions of uploading files and agree to it</div>
                        </div>
                        <button className='submitButton'>Submit</button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default CoursesPage;