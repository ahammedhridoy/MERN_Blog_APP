import { Link } from "react-router-dom";
import "./DashboardMenu.css";
import { MdContentPaste, MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoMdAddCircle } from "react-icons/io";

const DashboardMenu = () => {
  return (
    <div className="dashboard-menu">
      <div className="dash-menu-wrap">
        <ul>
          <MdDashboard />
          <Link to={"/dashboard"}>Dashboard</Link>
        </ul>
        <ul>
          <MdContentPaste />
          <Link to={"/my-posts"}>My Post</Link>
        </ul>
        <ul>
          <ImProfile />
          <Link to={"/dashboard"}>Profile</Link>
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
