import React from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";

export const DashboardLayout = ({ children }) => {

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Professors', path: '/professor' },
    { label: 'Courses', path: '/courses' },
    { label: 'ProfessorPage', path: '/professorPage' },
    { label: 'CoursesPage', path: '/coursesPage' },
    { label: 'Search Test', path: '/searchTest' },
  ];

  //can a loop like this be put in the div space? kind of like a ternary function of what to display? 
  /** if (signedIn == true) {
        for (amount of classes user is attending){
          {label: arrayOfClasses[i].name, path: className *or something like that*}
        }
      } else {
        {label: 'Sign In', path: '/signIn' },
        {label: 'Sign Up', path: '/signUp'},
      }
    */


  return (
    <BodyWrapper >
      <div className="flex h-screen bg-gray-200" >
        <NavSidebar links={links}/>

        <div className="flex flex-col flex-1 overflow-hidden" >
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
