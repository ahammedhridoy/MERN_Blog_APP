import "./Post.css";
import { FcLikePlaceholder } from "react-icons/fc";
// import { FcLike } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="post-card">
      <Link to={"/"}>
        <img
          src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
          alt="Avatar"
          style={{ width: "100%" }}
        />
      </Link>
      <div className="post-title">
        <Link to={"/post"} className="link">
          <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
        </Link>
      </div>
      <div className="post-desc">
        <p className="truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quaerat quod, quibusdam quod quaerat quaerat quaerat quaerat quaerat
          quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat{" "}
        </p>
      </div>
      <div className="post-cat">
        <div className="badge">Education</div>
        <div className="badge">Technology</div>
      </div>
      <div className="post-container">
        <div className="author-info">
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
      <div className="post-details">
        <div className="post-likes">
          <FcLikePlaceholder className="like" />
          {/* <FcLike className="like" /> */}
          <span>0</span>
        </div>
        <div className="post-comments">
          <LiaCommentSolid className="dislike" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
