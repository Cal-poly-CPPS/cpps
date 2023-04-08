import React from 'react';
import "./about.css"

import {DashboardLayout} from '../components/Layout';

const AboutPage = () => {
  return (
    <DashboardLayout>
      <div className='container'>
      <div id='about-image' style={{position:'relative', width:'200px', height:'300px', backgroundColor:'blue'}}>IMAGE HERE</div>
      <div className="about-content">
        <div style={{fontSize:'60px'}}>
          About Us
        </div>
        <div style={{padding:'5px', overflow: 'hidden ellipsis'}}>
          The CPP Scheduler is a one-stop place for all Cal Poly students to have 
          a streamlined location to keep track of all your <em>classes</em> and 
          <em> professors</em>. (WIP)
        </div>
      </div>
      </div>
    </DashboardLayout>
  )
}

export default AboutPage;