import React from "react";
import "../styles/DashboardOverview.css";
import { ChevronDown } from "lucide-react";
import HealthStatusCards from "./HealthStatusCards";

const DashboardOverview = () => {
  return (
    <div className="main">
      <div className="inside">
        <div className="top-row">
          <h2 className="big">Dashboard</h2>
          <span className="small with-icon">
            This week <ChevronDown size={16} />
          </span>
        </div>

        <div className="row">
          <div className="body-pic">
            <img src="/human.png" alt="Body" className="img" />
            <div className="tag one">❤️ Healthy Heart</div>
            <div className="tag two">🦵 Healthy Leg</div>
          </div>

          <HealthStatusCards />
        </div>

        <p className="link-detail">Details →</p>
      </div>
    </div>
  );
};

export default DashboardOverview;
