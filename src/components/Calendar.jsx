import { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import student from "./weeklyScheduleExample.json";
import "./Cal.css";
import { DashboardLayout } from "./Layout";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function eventsMapping(courseList) {
  return courseList.map((course) => {
    return {
      id: course.courseID,
      title: course.courseName,
      info: course, //store original json
      daysOfWeek: course.courseDays.map((day) => daysOfWeek.indexOf(day)),
      startTime: course.courseTime[0],
      endTime: course.courseTime[1],
    };
  });
}

const addClass = (event, setEvents) => {
  // example course
  //const courses = { courses: [] };
  const courses = [];
  courses.push(
    {
      courseID: -1,
      courseName: "courseName",
      courseSub: "courseSub",
      courseNum: "courseNum",
      courseProf: ["first", "last"],
      courseTime: ["22:00", "24:00"],
      courseDays: ["Saturday"],
    },
    {
      courseID: -2,
      courseName: "courseName",
      courseSub: "courseSub",
      courseNum: "courseNum",
      courseProf: ["first", "last"],
      courseTime: ["22:00", "24:50"],
      courseDays: ["Sunday"],
    }
  );
  const newEvent = eventsMapping(courses);
  const doesContain = event.some((i) => i.id == newEvent[0].id);
  if (!doesContain) setEvents(event.concat(newEvent));
};

const EventPopup = (props) => {
  const { eventInfo, isOpen, setOpen } = props;
  const event = eventInfo.extendedProps?.info;
  const handleClose = () => setOpen(false);

  useEffect(() => setOpen(isOpen), [isOpen]);

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"sm"}
      open={isOpen}
      onClose={handleClose}
      hideBackdrop={true}
    >
      {event && (
        <Box p={2}>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>{event.courseName}</Box>
            <Box>
              {event.courseSub} {event.courseNum}
            </Box>
            <Box>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          <Box>
            {event.courseProf[2] && event.courseProf[2] + " "}
            {event.courseProf[0]} {event.courseProf[1]}
          </Box>
          <Box sx={{ color: "grey", fontSize: 13 }}>
            {event.courseDays.map((day) => (
              <Box key={day}>
                {day} {event.courseTime[0]}-{event.courseTime[1]}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Dialog>
  );
};

const Calendar = () => {
  const [open, setOpen] = useState(false);
  const [popupInfo, setPopupInfo] = useState([]);
  const [event, setEvents] = useState(eventsMapping(student.courses));
  const handleSelectEvent = useCallback((info) => {
    setPopupInfo(info.event);
    setOpen(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("currCourses", JSON.stringify(event));
    console.log(
      "currCourses:",
      JSON.parse(localStorage.getItem("currCourses"))
    );
  }, [event]);

  return (
    <div>
      <DashboardLayout />

      <div className="" style={{ paddingTop: "90px", height: "80vh" }}>
        <div
          style={{
            backgroundColor: "white",
            height: "90%",
            borderRadius: "20px",
          }}
        >
          <EventPopup eventInfo={popupInfo} isOpen={open} setOpen={setOpen} />
          <FullCalendar
            allDaySlot={false}
            plugins={[timeGridPlugin]}
            initialView="timeGridWeek"
            height={"90%"}
            eventClick={handleSelectEvent}
            events={event}
            aspectRatio={"90%"}
            customButtons={{
              addClass: {
                text: "Add Class",
                click: () => addClass(event, setEvents),
              },
            }}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "addClass",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Calendar;
