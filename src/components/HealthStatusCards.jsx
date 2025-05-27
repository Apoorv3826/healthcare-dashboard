import React from "react";

const HealthStatusCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="top">
          <img src="/lungs.png" alt="Lungs" className="icon" />
          <span className="label">Lungs</span>
        </div>
        <p className="date">Date: 26 Oct 2021</p>
        <div className="bar-health red"></div>
      </div>

      <div className="card">
        <div className="top">
          <img src="/tooth.png" alt="Tooth" className="icon" />
          <span className="label">Teeth</span>
        </div>
        <p className="date">Date: 26 Oct 2021</p>
        <div className="bar-health green"></div>
      </div>

      <div className="card">
        <div className="top">
          <img src="/bone.png" alt="Bone" className="icon" />
          <span className="label">Bone</span>
        </div>
        <p className="date">Date: 26 Oct 2021</p>
        <div className="bar-health orange"></div>
      </div>
    </div>
  );
};

export default HealthStatusCards;
