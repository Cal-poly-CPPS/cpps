import React from 'react';
import aboutimg from './images/about-image.png'
import "./about.css"

import {DashboardLayout} from '../components/Layout';

const AboutPage = () => {
  return (
    <DashboardLayout>
      <div className='container'>
      <img src={aboutimg} alt="CPPS about image" id='about-image'/>      
      <div className="about-content">
        <div style={{fontSize:'60px', margin:'5px', fontWeight:'bold'}}>
          About Us
        </div>
        <div style={{margin:'5px', textAlign:'justify'}}>
          Our team consists of a few undergraduate <em>computer science</em> students from Cal Poly Pomona 
          brought together to create a senior project! Our goal is to abandon relying on 
          CPP's arguably archaic design to handle managing our classes and professors, 
          so we sought to create a more streamlined experience for students to keep 
          track of their schedules and get information on all Cal Poly Pomona professors. (WIP)
        </div>
      </div>
      </div>
    </DashboardLayout>
  )
}

export default AboutPage;