import React, { useState, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import student from "./weeklyScheduleExample.json";
import "./Cal.css";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const events = student.courses.map((course) => {
  return {
    id: course.courseID,
    title: course.courseName,
    info: course, //store original json
    daysOfWeek: course.courseDays.map((d) => daysOfWeek.indexOf(d)),
    startTime: course.courseTime[0],
    endTime: course.courseTime[1],
  };
});

const Calendar = () => {
  const [myEvents, setEvents] = useState(events);
  const handleSelectEvent = useCallback(
    (e) =>
      window.alert(
        JSON.stringify(e.el.fcSeg.eventRange.def.extendedProps, null, 4)
      ),
    []
  );
  return (
    <div className="container">
      <div style={{backgroundColor:'white', height:'90%', borderRadius:'20px', }}>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        height="90%"

        eventClick={handleSelectEvent}
        events={myEvents}
      />
      </div>
      <div>
        scheduler 
      </div>
    </div>
  );
};
export default Calendar;
