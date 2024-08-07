import "./Popular.css";
import { LiaCommentSolid } from "react-icons/lia";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Loading from "../Loading/Loading";

const Popular = () => {
  const { posts, loading, sendLike } = useContext(GlobalContext);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;
  const avatarUrl = `https://mern-blog-app-backend-jet.vercel.app/uploads`;

  // Sort posts based on the number of likes in descending order
  const sortedPosts = posts.sort((a, b) => b.likes.length - a.likes.length);

  // Filter posts to include only those with at least one like
  const filteredPosts = sortedPosts.filter((post) => post.likes.length > 0);

  // Function to format date
  const formatDate = (dateString) => {
    const [datePart] = dateString.split("T");
    return datePart;
  };

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };
  return (
    <div className="popular-post-wrap">
      <div className="container">
        {/* Title */}
        <div className="popular-title">Popular Posts</div>

        {/* Posts */}

        <div className="pop-wrap">
          {loading ? (
            <Loading />
          ) : (
            filteredPosts.slice(0, visiblePosts).map((post) => (
              <div className="popular-post-card" key={post._id}>
                <div className="popular-post-left">
                  <img
                    className="popular-post-img"
                    src={`https://mern-blog-app-backend-jet.vercel.app/uploads/${post?.thumbnail}`}
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
                        {post?.author?.avatar ? (
                          <>
                            <img
                              src={`${avatarUrl}/${post?.author?.avatar}`}
                              alt=""
                            />
                          </>
                        ) : (
                          <img
                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                            alt=""
                          />
                        )}
                        <h4>
                          <b>{post?.author?.username}</b>
                        </h4>
                      </div>
                      <p>{formatDate(post.updatedAt)}</p>
                    </div>
                    <div className="popular-post-likes-comments">
                      <div className="popular-post-likes">
                        {post?.likes?.includes(userId) ? (
                          <FcLike
                            className="like"
                            onClick={() => sendLike(post?._id)}
                          />
                        ) : (
                          <FcLikePlaceholder
                            className="latest-like"
                            onClick={() => sendLike(post?._id)}
                          />
                        )}
                        <span>{post?.likes?.length || 0}</span>
                      </div>
                      <div className="popular-post-comments">
                        <LiaCommentSolid className="latest-dislike" />
                        <span>{post?.comments?.length || 0}</span>
                      </div>
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
            ))
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {visiblePosts < posts.length && (
            <button className="btn" onClick={loadMorePosts}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popular;
