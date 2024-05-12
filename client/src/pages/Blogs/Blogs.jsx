import { useContext, useState } from "react";
import Post from "../../component/Post/Post";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Blogs.css";
import { GlobalContext } from "../../context/GlobalContext";
import Loading from "../../component/Loading/Loading";
import Banner from "../../component/Banner/Banner";

const Blogs = () => {
  const { posts, loading } = useContext(GlobalContext);
  const [visiblePosts, setVisiblePosts] = useState(10);

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
  };

  return (
    <div className="blogs">
      <Banner />

      <div style={{ padding: "0 20px" }}>
        <div className="blogs-content">
          {loading ? (
            <Loading />
          ) : (
            <div className="blogs-left">
              <div className="blogs-left-posts">
                {posts.slice(0, visiblePosts).map((post) => (
                  <Post key={post._id} post={post} />
                ))}
              </div>
              <div className="load-more">
                {visiblePosts < posts.length && (
                  <button className="btn" onClick={loadMorePosts}>
                    Load More
                  </button>
                )}
              </div>
            </div>
          )}
          <div className="blogs-right">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
