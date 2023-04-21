import { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  Autocomplete,
  Box,
  Dialog,
  IconButton,
  TextField,
} from "@mui/material";
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

const addClass = (event, setEvents, newCourses) => {
  const newEvent = eventsMapping(newCourses);
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

const AddClassPopup = (props) => {
  const { isOpen, setOpen, event, setEvents } = props;
  const handleClose = () => setOpen(false);
  const newCourses = [];

  newCourses.push(
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
      courseName: "courseName1",
      courseSub: "courseSub",
      courseNum: "courseNum",
      courseProf: ["first", "last"],
      courseTime: ["22:00", "24:50"],
      courseDays: ["Sunday"],
    }
  );
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <IconButton
        variant="contained"
        onClick={handleClose}
        sx={{ color: "white", position: "fixed", top: "1em", right: "1em" }}
      >
        <CloseIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Box p={1}>
        <Autocomplete
          options={newCourses}
          getOptionLabel={(course) => course.courseName}
          renderInput={(params) => (
            <TextField
              {...params}
              style={{ width: 300 }}
              label="Select Courses"
            />
          )}
          onChange={(_, v) => {
            addClass(event, setEvents, [v]);
            handleClose();
          }}
        />
      </Box>
    </Dialog>
  );
};

const Calendar = () => {
  const [open, setOpen] = useState(false);
  const [event, setEvents] = useState(eventsMapping(student.courses));
  const [addClassPopup, setAddClassPopup] = useState(true);
  const [popupInfo, setPopupInfo] = useState([]);

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
          <AddClassPopup
            isOpen={addClassPopup}
            setOpen={setAddClassPopup}
            event={event}
            setEvents={setEvents}
          />
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
                click: () => setAddClassPopup(true),
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
