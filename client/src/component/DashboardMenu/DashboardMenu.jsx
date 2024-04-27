import { Link } from "react-router-dom";
import "./DashboardMenu.css";
import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoMdAddCircle } from "react-icons/io";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const DashboardMenu = () => {
  const { currentUser } = useContext(AuthContext);
  const id = currentUser?._id;
  return (
    <div className="dashboard-menu">
      <div className="dash-menu-wrap">
        <ul>
          <MdDashboard />
          <Link to={"/dashboard"}>Dashboard</Link>
        </ul>

        <ul>
          <ImProfile />
          <Link to={`/profile/${id}`}>Profile</Link>
        </ul>
        <ul>
          <IoMdAddCircle />
          <Link to={"/add-post"}>Add Post</Link>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMenu;
