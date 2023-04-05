import React from "react";
import { DashboardLayout } from "../components/Layout";
import "./searchTest.css";
import SearchBar from "../components/SearchBar";


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
    </div>
    </DashboardLayout>
  );
};

export default ProfessorSearch;
