import React from "react";
import { DashboardLayout } from "../components/Layout";

import "./searchPageProperties.css";
import SearchBar from "../components/SearchBar";


const ProfessorSearch = () => {
  return (
    <DashboardLayout>
    <div className="App">


    <div style={{backgroundColor: "gray", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px"}}>
      <div id='search-title'>
        Search for Professors
      </div>

      </div>
            <div className="search-bar-container">
              <SearchBar/>
              <div>SearchResults</div>
            </div>


    </div>
    </DashboardLayout>
  );
};

export default ProfessorSearch;
