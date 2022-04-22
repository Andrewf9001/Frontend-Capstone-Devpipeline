import { useEffect, useState } from "react";

import widgetComponents from "../helpers/widgetComponents";

const DashboardItem = (props) => {
  const [dashboardItem, setDashboardItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDashboardItem(
      widgetComponents.find(
        (dashItem) => dashItem.id === +props.match.params.id
      )
    );
    setIsLoading(false);
  }, []);

  const { Comp } = dashboardItem;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="dashboard-cards-container">
      <Comp />
    </div>
  );
};

export default DashboardItem;
