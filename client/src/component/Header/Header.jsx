import "./Header.css";
import logo from "/assets/blogify.png";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  const [active, setActive] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const id = currentUser?._id;
  // Logout
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successful");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="header">
      <ToastContainer />
      <div className="">
        <div className="navigation">
          {/* Logo */}
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* Logo */}

          {/* Menu */}
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {currentUser && (
                <li>
                  <Link to="/add-post">Add Post</Link>
                </li>
              )}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {!currentUser && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
              {currentUser && (
                <>
                  <li>
                    <Link to={`/profile/${id}`}>Profile</Link>
                  </li>
                  <li>
                    <Link to={`/dashboard`}>Dashboard</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>Logout</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* Menu */}

          {/* Menu Icon */}
          <div className="menu-icon">
            <IoMenu onClick={() => setActive(!active)} />
          </div>
          {/* Menu Icon */}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${active ? "active" : ""}`}>
          <div className="menu-wrap">
            <IoMdClose
              className="close-icon"
              onClick={() => setActive(false)}
            />
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="menu-link">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                {currentUser && (
                  <li>
                    <Link to="/add-post">Add Post</Link>
                  </li>
                )}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                {!currentUser && (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
                {currentUser && (
                  <>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/">Logout</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="social-link">
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaSquareInstagram />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
      </div>
    </div>
  );
};

export default Header;
