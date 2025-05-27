import React from "react";
import "../styles/CalendarView.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const calendarData = [
  { day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"] },
  {
    day: "Tues",
    date: 26,
    slots: ["08:00", "09:00", "10:00"],
    highlight: "09:00",
  },
  {
    day: "Wed",
    date: 27,
    slots: ["10:00", "11:00", "13:00"],
    highlight: "11:00",
  },
  {
    day: "Thurs",
    date: 28,
    slots: ["10:00", "11:00", "14:00"],
    highlight: "11:00",
  },
  { day: "Fri", date: 29, slots: ["12:00", "14:00", "16:00"] },
  {
    day: "Sat",
    date: 30,
    slots: ["12:00", "14:00", "15:00"],
    highlight: "12:00",
  },
  {
    day: "Sun",
    date: 31,
    slots: ["09:00", "11:00", "13:00"],
    highlight: "09:00",
  },
];

const displayTimes = ["10:00", "11:00", "12:00"];

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="nav-buttons">
          <ArrowLeft size={16} />
          <ArrowRight size={16} />
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map(({ day, date, slots, highlight }) => (
          <div key={date} className="day-column">
            <div className="day-header">
              <div className="day-name">{day}</div>
              <div className="day-date">{date}</div>
            </div>
            {displayTimes.map((time) => {
              if (slots.includes(time)) {
                const isHighlighted = time === highlight;
                return (
                  <div
                    key={time}
                    className={`time-slot ${
                      isHighlighted ? "highlight-slot" : "slot"
                    }`}
                  >
                    {time}
                  </div>
                );
              } else {
                return (
                  <div key={time} className="time-slot no-slot">
                    —
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>

      <div className="appointment-row">
        <div className="appointment-card blue-card">
          <div className="appointment-title">Dentist</div>
          <div className="appointment-time">09:00–11:00</div>
          <div className="appointment-time">Dr. Cameron Williamson</div>
        </div>
        <div className="appointment-card light-card">
          <div className="appointment-title">Physiotherapy Appointment</div>
          <div className="appointment-time">11:00–12:00</div>
          <div className="appointment-time">Dr. Kevin Djones</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
