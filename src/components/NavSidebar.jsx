/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useNavigate , useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./Nav.css";
import Home from '@mui/icons-material/Home';

import Menu from '@mui/icons-material/Menu';

export const NavSidebar = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(!showResults)

  const Results = () => (
    <div className="popmenu" style={{position:"absolute", top:'0', width:"100%", height:'100%'}}>
      
      <div onClick={onClick} style={{backgroundColor:'black', height:"100%", width:"100%", opacity:'30%', position:'absolute', top:0, zIndex:0, position:'absolute'}}/>
      
      <div style={{width:'300px', zIndex:1, position:'absolute', boxShadow:'5px 0px 10px 5px #888888', backgroundColor:'white', height:'100%'}}>
        {/*Menu items*/}
        
        <div>

        </div>
        
        <div style={{color:'black', width:'300px', height:'100px', borderStyle:'solid', borderTopWidth:'1px',borderLeft:'0',borderRight:'0', borderBottomWidth:'1px', fontSize:'50px'}}>Nav</div>
        <div>
          <div style={{color:'black', width:'300px', height:'80px', borderStyle:'solid', borderTop:'0',borderLeft:'0',borderRight:'0', borderBottomWidth:'1px', display:'flex', fontSize:50}} className="menuitem"><Home style={{fontSize:'60px', position:'relative', top:'5%'}}/> <div style={{paddingLeft:'25px', userSelect:'none'}}>Home</div></div>
        </div>
        <div>
          <div style={{color:'black', width:'300px', height:'80px', borderStyle:'solid', borderTop:'0',borderLeft:'0',borderRight:'0', borderBottomWidth:'1px'}} className="menuitem">Courses</div>
        </div>
        <div>
          <div style={{color:'black', width:'300px', height:'80px', borderStyle:'solid', borderTop:'0',borderLeft:'0',borderRight:'0', borderBottomWidth:'1px'}} className="menuitem">Contact</div>
        </div>
        <div>
          <div style={{color:'black', width:'300px', height:'80px', borderStyle:'solid', borderTop:'0',borderLeft:'0',borderRight:'0', borderBottomWidth:'1px'}} className="menuitem">Planner</div>
        </div>
      </div>
      
    </div>
      
  )
  return(
    <div>
      
      <div style={{zIndex:'0'}}type="submit" value="Menu Icon" onClick={onClick}>
        <Menu/>
      </div>
      { showResults ? <Results /> : null }
      
    </div>
  )
  
}


