import { NavLink } from "react-router-dom";

import Weather from "../widgets/weather/Weather";

const SideNavBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-links">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <Weather />
    </div>
  );
};

export default SideNavBar;
