/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { GlobalContext } from "../../context/GlobalContext";

const Sidebar = () => {
  const { posts, loading, fetchPosts } = useContext(GlobalContext);
  const [visiblePosts, setVisiblePosts] = useState(5);
  const [editVisiblePosts, setEditVisiblePosts] = useState(2);

  useEffect(() => {
    fetchPosts();
  });

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
        <div className="popular-title">Editor's Pick</div>
        {/* post */}

        {loading ? (
          <Loading />
        ) : (
          <div>
            {posts.slice(0, editVisiblePosts).map((post) => (
              <div className="popular-post-card" key={post._id}>
                <div className="popular-post-left">
                  <img
                    className="popular-post-img"
                    src={`http://localhost:3000/uploads/${post?.thumbnail}`}
                    alt=""
                  />
                  <div className="popular-post-cat">
                    <Link to={`/category/${post?.category}`} className="link">
                      <div className="badge">{post?.category}</div>
                    </Link>
                  </div>
                </div>

                <div className="popular-post-details">
                  <div className="popular-post-title">
                    <Link to={`/post/${post?._id}`} className="link">
                      <h4>{post?.title}</h4>
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
                          <b>{post?.author?.username}</b>
                        </h4>
                      </div>
                      <p>{formatDate(post.updatedAt)}</p>
                    </div>
                  </div>
                  <div className="popular-post-desc">
                    <p
                      className="truncate"
                      dangerouslySetInnerHTML={{ __html: post?.description }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <hr style={{ margin: "20px 0" }} />

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
