import Sidebar from "../../component/Sidebar/Sidebar";
import "./CategoryPage.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import Banner from "./../../component/Banner/Banner";

const CategoryPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(10);
  const BASE_URL = "http://localhost:3000/api";
  const [categoryPost, setCategoryPost] = useState([]);
  const { category } = useParams();
  console.log(category);

  // Category post
  useEffect(() => {
    const getCategoryPost = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/post/category/${category}`
        );
        setCategoryPost(data);
        window.scrollTo(0, 0);
        console.log(categoryPost);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryPost();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    const [datePart] = dateString.split("T");
    return datePart;
  };

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
  };

  return (
    <div className="blogs">
      <Banner />

      <div style={{ padding: "0 20px" }}>
        {/* <Category /> */}
        <div className="blogs-content" style={{ marginTop: "0px" }}>
          <div className="blogs-left">
            <div className="blogs-left-posts">
              {categoryPost.map((post) => (
                <div className="post-card" key={post?._id}>
                  <Link to={"/"}>
                    <img
                      src={`http://localhost:3000/uploads/${post?.thumbnail}`}
                      alt="Avatar"
                      style={{ width: "100%" }}
                    />
                  </Link>
                  <div style={{ padding: "10px" }}>
                    <div className="post-title">
                      <Link to={`/post/${post?._id}`} className="link">
                        <h4>{post?.title}</h4>
                      </Link>
                    </div>
                    <div className="post-desc">
                      <p
                        className="truncate"
                        dangerouslySetInnerHTML={{
                          __html: post?.description,
                        }}
                      ></p>
                    </div>
                    <div className="post-cat">
                      <div className="badge">{post?.category}</div>
                    </div>
                    <div className="post-container">
                      <div className="author-info">
                        <img
                          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                          alt=""
                        />
                        <h4>
                          <b>{post?.author?.username}</b>
                        </h4>
                      </div>
                      <p>{formatDate(post?.updatedAt)}</p>
                    </div>
                    <div className="post-details">
                      <div className="post-likes">
                        <FcLikePlaceholder className="like" />
                        {/* <FcLike className="like" /> */}
                        <span>{post?.like?.length || 0}</span>
                      </div>
                      <div className="post-comments">
                        <LiaCommentSolid className="dislike" />
                        <span>{post?.comments?.length || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="load-more">
              {visiblePosts < categoryPost.length && (
                <button className="btn" onClick={loadMorePosts}>
                  Load More
                </button>
              )}
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

export default CategoryPage;
