/* eslint-disable react/no-unescaped-entities */
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="popular-title">Editor's Pick</div>
        {/* post */}
        <div className="popular-post-card">
          <div className="popular-post-left">
            <img
              className="popular-post-img"
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
            <div className="popular-post-cat">
              <div className="badge">Education</div>
              <div className="badge">Technology</div>
            </div>
          </div>

          <div className="popular-post-details">
            <div className="popular-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
              </Link>
            </div>
            <div className="popular-post-container">
              <div className="popular-post-author">
                <div className="popular-author-info">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    alt=""
                  />
                  <h4>
                    <b>John Doe</b>
                  </h4>
                </div>
                <p>1 April, 2024</p>
              </div>
            </div>
            <div className="popular-post-desc">
              <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
            </div>
          </div>
        </div>

        <hr style={{ margin: "20px 0" }} />

        {/* 2nd post section */}
        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              style={{ width: "150px", height: "100px" }}
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              style={{ width: "150px", height: "100px" }}
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              style={{ width: "150px", height: "100px" }}
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              style={{ width: "150px", height: "100px" }}
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              style={{ width: "150px", height: "100px" }}
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
              </Link>
            </div>
          </div>
        </div>

        <hr style={{ margin: "20px 0" }} />

        {/* Newsletter */}

        <div className="popular-title">Newsletter</div>

        <h4>Subscribe to Our Newsletter</h4>
        <div className="newsletter">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn">Subscribe</button>
          </form>
        </div>

        <hr style={{ margin: "20px 0" }} />

        {/* Social Networks */}
        <div className="popular-title">Social Networks</div>

        <Link to={"/"} className="link">
          <div className="facebook">
            <FaFacebookSquare />
            <p>Like Our Page</p>
          </div>
        </Link>
        <Link to={"/"} className="link">
          <div className="twitter">
            <FaTwitterSquare />
            <p>Follow Us</p>
          </div>
        </Link>
        <Link to={"/"} className="link">
          <div className="youtube">
            <IoLogoYoutube />
            <p>Check Recent Update</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
