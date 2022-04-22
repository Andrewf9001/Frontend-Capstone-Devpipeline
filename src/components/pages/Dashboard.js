import { useState, useEffect } from "react";

import widgetComponents from "../helpers/widgetComponents";
import DashboardCard from "../dashboard/DashboardCard";

const Dashboard = () => {
  const [dashboardItems, setDashboardItems] = useState([]);

  useEffect(() => {
    setDashboardItems([...widgetComponents]);
  }, []);

  const mapDashboardItem = () => {
    return dashboardItems.map((item) => {
      return <DashboardCard key={item.id} dbItem={item} />;
    });
  };

  return (
    <div className="dashboard-container">
      <div className="widget-container">{mapDashboardItem()}</div>
    </div>
  );
};

export default Dashboard;
