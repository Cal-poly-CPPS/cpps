import React from "react";

import { DashboardLayout } from "../components/Layout";
import Calendar from "../components/Calendar";
const CourseSearch = () => {
  return (
    <DashboardLayout>
    <div>


    <div style={{alignContent:'center', justifyContent:'center', position:'relative', width:'100%', backgroundColor:'grey', textAlign:'center'}}>
      <div>
        Search for professors
      </div>
       {/** Create a for loop for option values with all the courses limited to 10 options */}
       
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
            </datalist>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default CourseSearch;
