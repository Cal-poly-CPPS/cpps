import { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
              <Box>
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
        <EventPopup eventInfo={popupInfo} isOpen={open} setOpen={setOpen} />
        <FullCalendar
          allDaySlot={false}
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          height="90%"
          eventClick={handleSelectEvent}
          events={events}
        />
      </div>
    </div>
  );
};
export default Calendar;
