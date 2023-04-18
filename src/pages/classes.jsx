import React from "react";

import { DashboardLayout } from "../components/Layout";

import SearchBarCom from "../components/Select/SearchBarCom"


const Classes = () => {
  return (
    <div>
        <DashboardLayout/>
        <div style={{paddingTop:'100px'}}>
            <div>
                <SearchBarCom/>
            </div>
        </div>
    </div>
      
  );
};

export default Classes;
