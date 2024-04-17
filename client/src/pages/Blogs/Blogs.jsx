import Post from "../../component/Post/Post";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <img
        className="about-img"
        src="https://cdn.pixabay.com/photo/2018/04/13/16/49/laptop-3317007_1280.jpg"
        alt=""
      />

      <div style={{ padding: "0 20px" }}>
        <div className="blogs-content">
          <div className="blogs-left">
            <div className="blogs-left-posts">
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
            <div className="load-more">
              <button className="btn ">Load More</button>
            </div>
          </div>
          <div className="blogs-right">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
