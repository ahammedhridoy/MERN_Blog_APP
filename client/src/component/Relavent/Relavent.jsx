/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Relavent.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";

const Relavent = ({ id }) => {
  const [catPost, setCatPost] = useState([]);
  const { posts } = useContext(GlobalContext);
  const BASE_URL = "http://localhost:3000/api";

  const post = posts.find((p) => p?._id === id);
  const category = post ? post.category : null;

  // Category post
  useEffect(() => {
    const getCategoryPost = async () => {
      try {
        if (!category) return;

        const res = await axios.get(`${BASE_URL}/post/category/${category}`);
        const data = res.data;
        console.log("Received data:", data);

        if (data) {
          setCatPost(data);
          console.log("Updated catPost:", catPost);
        }
      } catch (error) {
        console.log("Error updating catPost:", error);
      }
    };

    getCategoryPost();
  }, [category]);

  return (
    <div className="latest-post-wrap" style={{ padding: "20px" }}>
      {/* Title */}
      <div className="latest-title">Relavent Posts</div>

      {/* Posts */}
      <div className="relavent-post">
        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
            <div className="latest-post-cat">
              {
                <Link to={"/"} className="link">
                  <div className="badge">{catPost?.category}</div>
                </Link>
              }
            </div>
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>{catPost?.title}</h4>
              </Link>
            </div>
            <div className="latest-post-container">
              <div className="latest-post-author">
                <div className="latest-author-info">
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
              <div className="latest-post-likes-comments">
                <div className="latest-post-likes">
                  <FcLikePlaceholder className="latest-like" />
                  {/* <FcLike className="like" /> */}
                  <span>100</span>
                </div>
                <div className="latest-post-comments">
                  <LiaCommentSolid className="latest-dislike" />
                  <span>100</span>
                </div>
              </div>
            </div>
            <div className="latest-post-desc">
              <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
            <div className="latest-post-cat">
              <div className="badge">Education</div>
              <div className="badge">Technology</div>
            </div>
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
              </Link>
            </div>
            <div className="latest-post-container">
              <div className="latest-post-author">
                <div className="latest-author-info">
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
              <div className="latest-post-likes-comments">
                <div className="latest-post-likes">
                  <FcLikePlaceholder className="latest-like" />
                  {/* <FcLike className="like" /> */}
                  <span>100</span>
                </div>
                <div className="latest-post-comments">
                  <LiaCommentSolid className="latest-dislike" />
                  <span>100</span>
                </div>
              </div>
            </div>
            <div className="latest-post-desc">
              <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relavent;
