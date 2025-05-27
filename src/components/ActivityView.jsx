import React from "react";
import "../styles/ActivityView.css";

// Bar types: none, aqua, dark, combo
const getBarType = () => {
  const types = ["none", "aqua", "dark", "combo"];
  return types[Math.floor(Math.random() * types.length)];
};

const ActivityView = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="activity-box">
      <div className="activity-header">
        <h3>Activity</h3>
        <span className="appointment-note">3 appointment on this week</span>
      </div>

      <div className="chart-area">
        {days.map((day, index) => (
          <div key={index} className="day-column">
            <div className="bar-stack">
              {[1, 2, 3, 4].map((_, i) => {
                const type = getBarType();
                return (
                  <div key={i}>
                    {type === "none" && <div className="bar full-grey"></div>}
                    {type === "aqua" && <div className="bar aqua-only"></div>}
                    {type === "dark" && <div className="bar dark-only"></div>}
                    {type === "combo" && (
                      <>
                        <div className="bar aqua-part"></div>
                        <div className="bar dark-part"></div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="day-label">{day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityView;
