import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import SettingsPage from "./settings";
import ProjectsPage from "./projects";
import MembersPage from "./members";
import AboutPage from "./about";
import TeamsPage from "./teams";
import HomePage from "./home";
import CalendarPage from "./calendarpage";
import Courses from "./courses";
import Professor from "./professor";
import ProfessorPage from "./professorPage";
import CoursesUploadPage from "./coursesUploadPage";
import SearchTest from "./searchTest";


import ProfessorRating from "./ProfessorRating";

const Routers = () => {
  return (
    <HashRouter>
      <Routes>

        <Route path="/about/members" element={<MembersPage />}/>
        <Route path="/about/projects" element={<ProjectsPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/another/teams" element={ <TeamsPage />}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/" element={<HomePage />}/> 
        <Route path="/calendar" element={<CalendarPage />}/> 
        <Route path="/home" element={<HomePage />}/> 
        <Route path="/courses" element={<Courses />}/> 
        <Route path="/professor" element={<Professor />}/> 
        <Route path="/professorPage" element={<ProfessorPage />}/>
        <Route path="/coursesUploadPage" element={<CoursesUploadPage />}/>
        <Route path="/searchTest" element={<SearchTest />}/>
        <Route path="/ProfessorRating" element={<ProfessorRating />} />

        



      </Routes>
    </HashRouter>
  );
};

export default Routers;
