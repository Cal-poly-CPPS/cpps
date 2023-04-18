
import React, { useState, useEffect } from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";
import { Link, NavLink } from 'react-router-dom';
import {isAuthenticated, signOut} from './Login'
import { useMediaQuery } from "react-responsive";

export const DashboardLayout = ({ children }) => {

  const [isLogged, setisLogged] = useState(false);

  useEffect(() => { 
    setisLogged(isAuthenticated())
  }, []);

  const desktopScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const mobileScreen = useMediaQuery({ query: '(max-width: 1024px)' });



  return (
    <div style={{width:'100%'}}>
    <link rel="stylesheet" href="https://use.typekit.net/yba0jeu.css"/>
        

    {desktopScreen && <div style={{position:'absolute', backgroundColor:'black', width:'100%', height:'55px', display:'flex'}}>
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
      <div style={{justifyContent:'right', display:'flex', width:'20%', color:'white', paddingRight:'40px'}}> 
      {!isLogged ?  
      <button style={{backgroundColor:'transparent', color:'white', fontFamily:'sans-serif', justifyContent:'center', fontWeight:'100', fontStyle:'normal', paddingLeft:'70px', fontSize:'20px', color:'white', borderStyle:'none'}}>
        <NavLink to={'/login'} style={{textDecoration:'none', color:'white'}}>
            Sign in
        </NavLink>  
      </button>
      :       
      <button onClick = {signOut} style={{backgroundColor:'transparent', color:'white', fontFamily:'sans-serif', paddingTop:'5px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', paddingLeft:'70px', fontSize:'20px', color:'white', borderStyle:'none'}}>
          Sign out
      </button> 
      }
      </div>
    </div>}

    {mobileScreen && <div style={{position:'absolute', backgroundColor:'black', width:'100%', height:'55px', display:'flex'}}>
      <NavLink to={'/home'} style={{ textDecoration:'none', width:'20%'}}>
        <div style={{borderColor:'black', fontSize:'15px', color:'white', fontFamily:'sans-serif', paddingTop:'10px', paddingLeft:'20px', fontWeight:'100', fontStyle:'normal', width:'10%'}}>
          CPP Fori
        </div>
      </NavLink>
      <div style={{justifyContent:'center', display:'flex', width:'80%', paddingTop:'3px'}}>
        
      <NavLink to={'/Calendar'} style={{ textDecoration:'none'}}>
        <div style={{borderColor:'black', fontSize:'17px', color:'white', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', paddingLeft:'5vw'}}>
            Calendar
        </div>
        </NavLink>
        <NavLink to={'/classes'} style={{ textDecoration:'none'}}>
        <div style={{borderColor:'black', fontSize:'17px', color:'white', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', paddingLeft:'5vw'}}>
            Classes
        </div>
        </NavLink>
        <NavLink to={'/home'} style={{ textDecoration:'none'}}>
        <div style={{borderColor:'black', fontSize:'17px', color:'white', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', paddingLeft:'5vw'}}>
            Search
        </div>
        </NavLink>
      </div>
      <div style={{justifyContent:'right', display:'flex', width:'25%', color:'white', paddingLeft:'10px'}}> 
      {!isLogged ?  
      <button style={{backgroundColor:'transparent', color:'white', fontFamily:'sans-serif', justifyContent:'center', fontWeight:'100', fontStyle:'normal', fontSize:'15px', color:'white', borderStyle:'none', paddingRight:'10px'}}>
        <NavLink to={'/login'} style={{textDecoration:'none', color:'white'}}>
            Sign in
        </NavLink>  
      </button>
      :       
      <button onClick = {signOut} style={{backgroundColor:'transparent', color:'white', fontFamily:'sans-serif', paddingTop:'5px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', paddingLeft:'70px', fontSize:'15px', color:'white', borderStyle:'none'}}>
          Sign out
      </button> 
      }
      </div>
    </div>}
    </div>
  );
};
