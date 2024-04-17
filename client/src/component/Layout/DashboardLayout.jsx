import { Outlet } from "react-router-dom";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="container">
        <div className="dashboard-wrap">
          <div className="dashboard-left">
            <DashboardMenu />
          </div>
          <div className="dashboard-right">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
