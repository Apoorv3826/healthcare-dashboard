import React from "react";
import "../styles/UpcomingSchedule.css";

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

      <div className="upcoming-day-group">
        <div className="upcoming-day-label">On Thursday</div>
        <div className="upcoming-appointment-row">
          <SimpleAppointmentCard
            iconSrc="/injection.png"
            title="Health checkup complete"
            time="11:00 AM"
          />
          <SimpleAppointmentCard
            iconSrc="/eye.png"
            title="Ophthalmologist"
            time="14:00 PM"
          />
        </div>
      </div>

      <div className="upcoming-day-group">
        <div className="upcoming-day-label">On Saturday</div>
        <div className="upcoming-appointment-row">
          <SimpleAppointmentCard
            iconSrc="/love.png"
            title="Cardiologist"
            time="12:00 AM"
          />
          <SimpleAppointmentCard
            iconSrc="/doctor.png"
            title="Neurologist"
            time="16:00 PM"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
