import { useContext, useEffect } from "react";
import "./Dashboard.css";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="my-posts-item-wrap">
        <div className="post-item-left">
          <img
            className="post-item-img"
            src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
            alt=""
          />
          <Link to={"/post"} className="link">
            <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
          </Link>
        </div>

        <div className="post-item-right">
          <Link to={"/"} className="link">
            View
          </Link>
          <button className="btn">Edit</button>
          <button className="btn-delete">Delete</button>
        </div>
      </div>

      <div className="my-posts-item-wrap">
        <div className="post-item-left">
          <img
            className="post-item-img"
            src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
            alt=""
          />
          <Link to={"/post"} className="link">
            <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
          </Link>
        </div>

        <div className="post-item-right">
          <Link to={"/"} className="link">
            View
          </Link>
          <button className="btn">Edit</button>
          <button className="btn-delete">Delete</button>
        </div>
      </div>

      <div className="my-posts-item-wrap">
        <div className="post-item-left">
          <img
            className="post-item-img"
            src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
            alt=""
          />
          <Link to={"/post"} className="link">
            <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
          </Link>
        </div>

        <div className="post-item-right">
          <Link to={"/"} className="link">
            View
          </Link>
          <button className="btn">Edit</button>
          <button className="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
