import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <p className="banner-text">Welcome to Our Blogs</p>
      <Link to={"/blogs"}>
        <button className="btn">Read More</button>
      </Link>
    </div>
  );
};

export default Banner;
