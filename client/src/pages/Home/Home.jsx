import Banner from "../../component/Banner/Banner";
import LatestPost from "../../component/LatestPost/LatestPost";
import Popular from "../../component/Popular/Popular";
import Relavent from "../../component/Relavent/Relavent";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Banner />
      <div className="main-content">
        <div className="main-left">
          <LatestPost />
          <Popular />
          <Relavent />
        </div>
        <div className="main-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
