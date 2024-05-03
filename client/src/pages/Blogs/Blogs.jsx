import { useContext, useState } from "react";
import Post from "../../component/Post/Post";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Blogs.css";
import { GlobalContext } from "../../context/GlobalContext";
import Loading from "../../component/Loading/Loading";

const Blogs = () => {
  const { posts, loading } = useContext(GlobalContext);
  const [visiblePosts, setVisiblePosts] = useState(10);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
  };

  return (
    <div className="blogs">
      <img
        className="about-img"
        src="https://cdn.pixabay.com/photo/2018/04/13/16/49/laptop-3317007_1280.jpg"
        alt=""
      />

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
