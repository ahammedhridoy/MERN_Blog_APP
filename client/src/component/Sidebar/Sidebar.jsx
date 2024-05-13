/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { GlobalContext } from "../../context/GlobalContext";
import Newsletter from "../Newsletter/Newsletter";

const Sidebar = () => {
  const { posts, loading, fetchPosts } = useContext(GlobalContext);
  const [visiblePosts, setVisiblePosts] = useState(5);
  const [editVisiblePosts, setEditVisiblePosts] = useState(2);

  // useEffect(() => {
  //   fetchPosts();
  // });

  // Function to format date
  const formatDate = (dateString) => {
    const [datePart] = dateString.split("T");
    return datePart;
  };

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };
  return (
    <div className="sidebar">
      <div className="container">
        <div className="popular-title">Sidebar</div>

        {/* 2nd post section */}
        {loading ? (
          <Loading />
        ) : (
          <div>
            {posts.slice(0, visiblePosts).map((post) => (
              <div className="latest-post-card" key={post._id}>
                <div className="latest-post-left">
                  <img
                    className="latest-post-img"
                    style={{ width: "150px", height: "100px" }}
                    src={`http://localhost:3000/uploads/${post?.thumbnail}`}
                    alt=""
                  />
                </div>

                <div className="latest-post-details">
                  <div className="latest-post-title">
                    <Link to={`/post/${post?._id}`} className="link">
                      <h4>{post?.title}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <hr style={{ margin: "20px 0" }} />

        {/* Newsletter */}

        <div className="popular-title">Newsletter</div>

        <h4>Subscribe to Our Newsletter</h4>
        <Newsletter />

        <hr style={{ margin: "20px 0" }} />

        {/* Social Networks */}
        <div className="popular-title">Social Networks</div>

        <Link to={"https://facebook.com"} target="_blank" className="link">
          <div className="facebook">
            <FaFacebookSquare />
            <p>Like Our Page</p>
          </div>
        </Link>
        <Link to={"https://twitter.com"} target="_blank" className="link">
          <div className="twitter">
            <FaTwitterSquare />
            <p>Follow Us</p>
          </div>
        </Link>
        <Link
          to={"https://www.youtube.com/@TECHNOLOGYNULL"}
          target="_blank"
          className="link"
        >
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
