import { Link } from "react-router-dom";

const DashboardCard = ({ dbItem }) => {
  return (
    <Link to={`/dashboard/${dbItem.id}`}>
      <div className="dashboard-cards-container">
        <div className="title-wrapper">
          <h1>{dbItem.title}</h1>
        </div>

        <div className="description-wrapper">
          <p>{dbItem.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
