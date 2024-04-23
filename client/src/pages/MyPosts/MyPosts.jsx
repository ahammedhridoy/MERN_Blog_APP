import { Link, useNavigate } from "react-router-dom";
import "./MyPosts.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyPosts = () => {
  const { currentUser } = useContext(AuthContext);
  // const token = currentUser?.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div
      className="my-posts-page"
      style={{ marginTop: "100px", minHeight: "100vh", padding: "0 20px" }}
    >
      <div className="container">
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
    </div>
  );
};

export default MyPosts;
