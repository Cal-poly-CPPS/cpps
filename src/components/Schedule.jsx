import React from "react";

import { NavSidebar } from "./NavSidebar";
import {fetchData} from './AwsFunctions';


export const ScheduleBuilder = ({ children }) => {
    classes = [];

    const fetchDataFormDynamoDb = () => {
        fetchData('Professors')
      }
      
    return (
        <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
    );
};
