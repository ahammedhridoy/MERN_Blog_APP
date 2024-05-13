import { useContext } from "react";
import "./PopPost.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const PopPost = () => {
  const { posts, sendLike } = useContext(GlobalContext);
  return (
    <>
      <div className="pop-post-card">
        <div className="pop-post-left">
          <img
            className="pop-post-img"
            src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
            alt=""
          />
          <div className="pop-post-cat">
            <div className="badge">Education</div>
            <div className="badge">Technology</div>
          </div>
        </div>

        <div className="pop-post-details">
          <div className="popular-post-title">
            <Link to={"/post"} className="link">
              <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
            </Link>
          </div>
          <div className="pop-post-container">
            <div className="pop-post-author">
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
            <div className="pop-post-likes-comments">
              <div className="pop-post-likes">
                <FcLikePlaceholder className="pop-post-like" />
                {/* <FcLike className="like" /> */}
                <span>100</span>
              </div>
              <div className="pop-post-comments">
                <LiaCommentSolid className="pop-post-dislike" />
                <span>100</span>
              </div>
            </div>
          </div>
          <div className="pop-post-desc">
            <p className="truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat quod, quibusdam quod quaerat quaerat quaerat quaerat
              quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
              quaerat{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopPost;
