import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
};

export default App;
