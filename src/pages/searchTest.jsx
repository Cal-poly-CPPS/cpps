import React from "react";
import { DashboardLayout } from "../components/Layout";
import "./searchTest.css";
import SearchBar from "../components/search/SearchBar";


const ProfessorSearch = () => {
  return (
    <DashboardLayout>
    <div className="App">
        <div className='titleProps'>
            <div id='searchTitle'>
                Search Page
            </div>
            <div className='line'></div>
        </div>

        <div className='bigBox'>
            <div className='littleTitle'>
                <div>Class Name</div>
                <SearchBar/>
            </div>
            <div className='multipleInfo'>
                <div className='classInfo'>
                    <div>Class Id Holder</div>
                    <div>Prof Name</div>
                    <div>GPA</div>
                    <div>Time Holder</div>
                    <button className='forButton'>More Info</button>
                </div>
                <div className='classInfo'>
                    <div>Class Id Holder</div>
                    <div>Prof Name</div>
                    <div>GPA</div>
                    <div>Time Holder</div>
                    <button className='forButton'>More Info</button>
                </div>
                <div className='classInfo'>
                    <div>Class Id Holder</div>
                    <div>Prof Name</div>
                    <div>GPA</div>
                    <div>Time Holder</div>
                    <button className='forButton'>More Info</button>
                </div>
            </div>
        </div>

        <div className='bigBox'>
            <div className='sideHolder'>
                <div className='otherLittleTitle'>
                    <div>Professor Name</div>
                    <SearchBar/>
                </div>
                <div className='underLittleTitle'>
                    <div className='profGPA'>Average GPA: --</div>
                    <button className='linkToProfPage'>Professor Page</button>
                </div>
                <div className='sideText'>Average Rating: --</div>
                <div className='sideText'>Rate My Professor Rating: --</div>
            </div>
            <div className='multipleInfo'>
                <div className='classInfo'>
                    <div>Professor Id Holder</div>
                    <div>Prof Name</div>
                    <div>GPA</div>
                    <div>Time Holder</div>
                    <button className='forButton'>More Info</button>
                </div>
                <div className='classInfo'>
                <div>Professor Id Holder</div>
                    <div>Prof Name</div>
                    <div>GPA</div>
                    <div>Time Holder</div>
                    <button className='forButton'>More Info</button>
                </div>
                <div className='classInfo'>
                <div>Professor Id Holder</div>
                    <div>Prof Name</div>
                    <div>GPA</div>
                    <div>Time Holder</div>
                    <button className='forButton'>More Info</button>
                </div>
            </div>
        </div>
        <div className="bottomTitle">
            <div>Disclaimer</div>
            <div className='disclaimer'>Data found here may be incorrect. Please check the official CPP database/resourses and report any errors you find.</div>
        </div>
    </div>
    </DashboardLayout>
  );
};

export default ProfessorSearch;
