import { Link } from "react-router-dom";
import "./LatestPost.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Loading from "../Loading/Loading";

const LatestPost = () => {
  const { posts, loading, sendLike } = useContext(GlobalContext);
  const [visiblePosts, setVisiblePosts] = useState(5);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

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
    <div className="latest-post-wrap">
      <div className="container">
        {/* Title */}
        <div className="latest-title">Latest Posts</div>

        {/* Posts */}
        {loading ? (
          <Loading />
        ) : (
          <div>
            {posts.slice(0, visiblePosts).map((post) => (
              <div className="latest-post-card" key={post._id}>
                <div className="latest-post-left">
                  <img
                    className="latest-post-img"
                    src={`http://localhost:3000/uploads/${post?.thumbnail}`}
                    alt=""
                  />
                  <div className="latest-post-cat">
                    <Link to={`/category/${post?.category}`} className="link">
                      <div className="badge">{post?.category}</div>
                    </Link>
                  </div>
                </div>

                <div className="latest-post-details">
                  <div className="latest-post-title">
                    <Link to={`/post/${post?._id}`} className="link">
                      <h4>{post?.title}</h4>
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
                          <b>{post?.author?.username}</b>
                        </h4>
                      </div>
                      <p>{formatDate(post.updatedAt)}</p>
                    </div>
                    <div className="latest-post-likes-comments">
                      <div className="latest-post-likes">
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
                      <div className="latest-post-comments">
                        <LiaCommentSolid className="latest-dislike" />
                        <span>{post?.comments?.length || 0}</span>
                      </div>
                    </div>
                  </div>
                  <div className="latest-post-desc">
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

export default LatestPost;
