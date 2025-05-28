import React from "react";
import "../styles/UpcomingSchedule.css";
import upcomingAppointments from "../data/upcomingAppointments";

const SimpleAppointmentCard = ({ iconSrc, title, time }) => (
  <div className="upcoming-appointment-card">
    <div className="upcoming-appointment-title">
      <span className="title-text">{title}</span>
      <img src={iconSrc} alt="" className="appointment-icon" />
    </div>
    <div className="upcoming-appointment-time">{time}</div>
  </div>
);

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <h3 className="upcoming-schedule-header">The Upcoming Schedule</h3>
      {upcomingAppointments.map(({ day, appointments }, index) => (
        <div className="upcoming-day-group" key={index}>
          <div className="upcoming-day-label">On {day}</div>
          <div className="upcoming-appointment-row">
            {appointments.map((appt, i) => (
              <SimpleAppointmentCard
                key={i}
                iconSrc={appt.iconSrc}
                title={appt.title}
                time={appt.time}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
