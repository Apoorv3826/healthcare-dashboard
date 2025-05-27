import React from "react";
import { Search, Bell, Plus } from "lucide-react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <div className="logo">
          <span className="logo-aqua">Health</span>
          <span className="logo-blue">care.</span>
        </div>
      </div>

      <div className="search">
        <Search className="icon-left" size={22} />
        <input type="text" placeholder="Search" />
        <Bell
          className="icon-right"
          size={24}
          stroke="#1e3a8a"
          fill="#1e3a8a"
        />
      </div>

      <div className="profile">
        <img src="/profile.jpg" alt="User" className="avatar" />
        <button className="btn">
          <Plus size={30} />
        </button>
      </div>
    </header>
  );
};

export default Header;
