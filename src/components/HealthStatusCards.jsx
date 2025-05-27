const cardData = [
  {
    icon: "/lungs.png",
    label: "Lungs",
    date: "26 Oct 2021",
    className: "red",
    progress: "65%",
  },
  {
    icon: "/tooth.png",
    label: "Teeth",
    date: "26 Oct 2021",
    className: "green",
    progress: "60%",
  },
  {
    icon: "/bone.png",
    label: "Bone",
    date: "26 Oct 2021",
    className: "orange",
    progress: "60%",
  },
];

const HealthStatusCards = () => {
  return (
    <div className="cards">
      {cardData.map((card, index) => (
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
