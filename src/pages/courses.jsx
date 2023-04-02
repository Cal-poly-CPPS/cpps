import React from "react";
import "./courses.css"
import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";


import "./courses.css";
import SearchBar from "../components/SearchBar";


const CourseSearch = () => {
  return (
    <DashboardLayout>
    <div className="App">


    <div style={{backgroundColor: "gray", display: "flex", 
    flexDirection: "column", alignItems: "center", padding: "5px"}}>
      <div id='search-title'>
        Search for professors
      </div>
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
            <div className="search-bar-container">
              <SearchBar/>
              <div>SearchResults</div>
            </div>


    </div>
    </DashboardLayout>
  );
};

export default CourseSearch;
