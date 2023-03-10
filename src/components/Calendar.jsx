import React, { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import student from "./weeklyScheduleExample.json";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
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

const EventDetail = (props) => {
  const { eventInfo, isOpen, setOpen } = props;
  const handleClose = () => setOpen(false);
  useEffect(() => setOpen(isOpen), [isOpen]);

  return (
    <Dialog open={isOpen} onClose={handleClose} hideBackdrop={true}>
      <div>{eventInfo.title}</div>
      <Divider></Divider>
      <div></div>
    </Dialog>
  );
};

const Calendar = () => {
  const [myEvents, setEvents] = useState(events);
  const [open, setOpen] = useState(false);
  const [popupInfo, setPopupInfo] = useState([]);
  const handleSelectEvent = useCallback((info) => {
    setPopupInfo(info.event);
    setOpen(true);
  }, []);

  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "white",
          height: "90%",
          borderRadius: "20px",
        }}
      >
        <EventDetail eventInfo={popupInfo} isOpen={open} setOpen={setOpen} />
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          height="90%"
          eventClick={handleSelectEvent}
          events={myEvents}
        />
      </div>
      <div>scheduler</div>
    </div>
  );
};
export default Calendar;
