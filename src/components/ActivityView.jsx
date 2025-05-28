import React from "react";
import "../styles/ActivityView.css";

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
        <span className="appointment-note">3 appointments this week</span>
      </div>

      <div className="chart-area">
        {days.map((day, index) => (
          <div key={index} className="day-column">
            <div className="bar-group">
              {[1, 2, 3, 4].map((_, i) => {
                const type = getBarType();
                return (
                  <div key={i}>
                    {type === "none" && (
                      <div
                        className="bar full-grey"
                        title="No activity"
                        aria-label="No activity"
                      ></div>
                    )}
                    {type === "aqua" && (
                      <div
                        className="bar aqua-only"
                        title="Light activity"
                        aria-label="Light activity"
                      ></div>
                    )}
                    {type === "dark" && (
                      <div
                        className="bar dark-only"
                        title="Intense activity"
                        aria-label="Intense activity"
                      ></div>
                    )}
                    {type === "combo" && (
                      <>
                        <div
                          className="bar aqua-part"
                          title="Light activity"
                          aria-label="Light activity"
                        ></div>
                        <div
                          className="bar dark-part"
                          title="Intense activity"
                          aria-label="Intense activity"
                        ></div>
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
