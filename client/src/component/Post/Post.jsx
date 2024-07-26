/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Post.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
// import { FcLike } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Post = ({ post }) => {
  const { title, description, category, author, updatedAt } = post;
  const { sendLike } = useContext(GlobalContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;
  const avatarUrl = `https://mern-blog-app-backend-jet.vercel.app/uploads`;
  // Function to format date
  const formatDate = (dateString) => {
    const [datePart] = dateString.split("T");
    return datePart;
  };

  return (
    <div>
      <div className="post-card">
        <Link to={"/"}>
          <img
            src={`https://mern-blog-app-backend-jet.vercel.app/uploads/${post?.thumbnail}`}
            alt="Avatar"
            style={{ width: "100%" }}
          />
        </Link>
        <div style={{ padding: "10px" }}>
          <div className="post-title">
            <Link to={`/post/${post?._id}`} className="link">
              <h4>{title}</h4>
            </Link>
          </div>
          <div className="post-desc">
            <p
              className="truncate"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
          <div className="post-cat">
            <Link to={`/category/${category}`} className="link">
              <div className="badge">{category}</div>
            </Link>
          </div>
          <div className="post-container">
            <div className="author-info">
              {post?.author?.avatar ? (
                <>
                  <img src={`${avatarUrl}/${post?.author?.avatar}`} alt="" />
                </>
              ) : (
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt=""
                />
              )}
              <h4>
                <b>{author?.username}</b>
              </h4>
            </div>
            <p>{formatDate(updatedAt)}</p>
          </div>
          <div className="post-details">
            <div className="post-likes">
              {post?.likes?.includes(userId) ? (
                <FcLike className="like" onClick={() => sendLike(post?._id)} />
              ) : (
                <FcLikePlaceholder
                  className="latest-like"
                  onClick={() => sendLike(post?._id)}
                />
              )}
              <span>{post?.likes?.length || 0}</span>
            </div>
            <div className="post-comments">
              <LiaCommentSolid className="latest-dislike" />
              <span>{post?.comments?.length || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
