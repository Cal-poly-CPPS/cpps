import React from "react";
import "./courses.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";


import "./courses.css";
import SearchBar from "../components/SearchBar";


const CourseSearch = () => {
  return (
    <DashboardLayout>
    <div className="app">
        <div className="display">
        <div className="search-results">
              <div>6mdka34   Professor A     3.2     8/10   7:00am - 10:00am</div>
              </div>
            <div className="header">
              <div>Class Name</div>
              </div>
              <SearchBar/>
                          
            </div>
        <div className="display">
        <div className="search-results">
              <div>6mdka34   Professor A     3.2     8/10   7:00am - 10:00am</div>
              </div>
            <div className="header">
              <div>Professor  </div>
              </div>
              <SearchBar/>
            <div></div>
              <div>Average GPA: </div>
              <div>Average Rating: </div>
              <div>Rate My Professor Rating: </div>
            </div>    
      <div>
       {/** Create a for loop for option values with all the courses limited to 10 options */}
{/*        
    <input type="text" list="programmingLanguages" placeholder="Enter Here"/>
            <datalist id="programmingLanguages" style={{}}>
                <option value="Objective C">Objective C</option>
                <option value="C++">C++</option>
                <option value="C#">C#</option>
                <option value="Cobol">Cobol</option>
                <option value="Go">Go</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="Pascal">Pascal</option>
                <option value="Perl">Perl</option>
                <option value="R">R</option>
                <option value="Swift">Swift</option>
  </datalist> */}

      </div>
    </div>
    </DashboardLayout>
  );
};

export default CourseSearch;