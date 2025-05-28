import healthStatusData from "../data/healthStatusData";

const HealthStatusCards = () => {
  return (
    <div className="cards">
      {healthStatusData.map((card, index) => (
        <div className="card" key={index}>
          <div className="top">
            <img src={card.icon} alt={card.label} className="icon" />
            <span className="label">{card.label}</span>
          </div>
          <p className="date">Date: {card.date}</p>
          <div className="bar-health">
            <div
              className={card.className}
              style={{ width: card.progress }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
