import React from 'react';
import "./about.css"

import {DashboardLayout} from '../components/Layout';

const AboutPage = () => {
  return (
    <DashboardLayout>
      <div className="container">
        <div id="main-title">
          About Us
        </div>
        <div>
          <p>
            The CPP Scheduler is a one-stop place for all Cal Poly students to have 
            a streamlined location to keep track of all your <em>classes</em> and 
            <em> professors</em>.
          </p>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AboutPage;