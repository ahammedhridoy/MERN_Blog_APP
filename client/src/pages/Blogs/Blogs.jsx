import Post from "../../component/Post/Post";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <div className="posts-wrap">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Blogs;
