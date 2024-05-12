import { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const { posts, fetchPosts } = useContext(GlobalContext);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const BASE_URL = "http://localhost:3000/api";
  const token =
    JSON.parse(localStorage.getItem("token")) || localStorage.getItem("token");

  const filteredPosts = posts.filter(
    (post) => post.author._id === currentUser._id
  );

  // Delete post

  const deletePost = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/post/delete/${id}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
      toast.success("Post deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
  };

  return (
    <div>
      <Toaster />
      {filteredPosts.slice(0, visiblePosts).map((post) => (
        <div className="my-posts-item-wrap" key={post._id}>
          <div className="post-item-left">
            <img
              src={`http://localhost:3000/uploads/${post?.thumbnail}`}
              alt="Thumbnail"
              style={{ width: "100%" }}
            />
            <Link to={`/post/${post?._id}`} className="link">
              <h4>{post?.title}</h4>
            </Link>
          </div>
          <div className="post-item-right">
            <Link to={`/post/edit/${post?._id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              className="btn-delete"
              onClick={() => deletePost(post?._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="load-more">
        {visiblePosts < posts.length && (
          <button className="btn" onClick={loadMorePosts}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
