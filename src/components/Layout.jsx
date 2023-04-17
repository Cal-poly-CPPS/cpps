import React from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";
import { Link, NavLink } from 'react-router-dom';

export const DashboardLayout = ({ children }) => {
  return (
    <div>
    <link rel="stylesheet" href="https://use.typekit.net/yba0jeu.css"/>
        

    <div style={{position:'absolute', backgroundColor:'black', width:'100%', height:'55px', display:'flex'}}>
      <NavLink to={'/home'} style={{ textDecoration:'none', width:'20%'}}>
        <div style={{borderColor:'black', fontSize:'20px', color:'white', fontFamily:'sans-serif', paddingTop:'15px', paddingLeft:'25px', fontWeight:'100', fontStyle:'normal'}}>
          CPP Fori
        </div>
      </NavLink>
      <div style={{justifyContent:'center', display:'flex', width:'60%'}}>
        
      <NavLink to={'/Calendar'} style={{ textDecoration:'none'}}>
        <div style={{borderColor:'black', fontSize:'20px', color:'white', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal'}}>
            Calendar
        </div>
        </NavLink>
        <NavLink to={'/classes'} style={{ textDecoration:'none'}}>
        <div style={{borderColor:'black', fontSize:'20px', color:'white', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', paddingLeft:'70px'}}>
            Classes
        </div>
        </NavLink>
        <NavLink to={'/home'} style={{ textDecoration:'none'}}>
        <div style={{borderColor:'black', fontSize:'20px', color:'white', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', paddingLeft:'70px'}}>
            Search
        </div>
        </NavLink>
      </div>

      <div style={{justifyContent:'right', display:'flex', width:'20%', color:'white', paddingTop:'15px', paddingRight:'40px'}}>
      <NavLink style={{ textDecoration:'none', color:'white'}}>
          Sign in
      </NavLink>  
      </div>

    </div>
    </div>
  );
};
