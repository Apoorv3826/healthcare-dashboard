import DashboardOverview from "./DashboardOverview";
import ActivityView from "./ActivityView";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import "../styles/MainContent.css";

const DashboardMainContent = () => {
  return (
    <div className="main-area">
      <div className="left-side">
        <DashboardOverview />
        <ActivityView />
      </div>
      <div className="right-side">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
