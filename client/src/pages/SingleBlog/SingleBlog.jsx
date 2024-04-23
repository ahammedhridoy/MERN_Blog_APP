import "./SingleBlog.css";
import Sidebar from "./../../component/Sidebar/Sidebar";
import { Link, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../component/Loading/Loading";

const SingleBlog = () => {
  const BASE_URL = "http://localhost:3000/api";
  const { setSinglePost, singlePost, loading, setLoading } =
    useContext(GlobalContext);
  const { id } = useParams();
  const imageUrl = `http://localhost:3000/uploads/${singlePost.thumbnail}`;
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?._id;
  const location = useLocation();
  const postUrl = `http://localhost:5173${location?.pathname}`;

  // Single post

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/post/single/${id}`);
        setSinglePost(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSinglePost();
  }, []);

  return (
    <div
      className="single-blog"
      style={{ padding: "0 20px", marginTop: "80px" }}
    >
      <div className=" single-blog-wrap">
        <div className="single-left">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="post-title">
                <div>
                  <Link to={`/post/${singlePost?._id}`} className="link">
                    <h4>{singlePost?.title}</h4>
                  </Link>
                </div>

                {singlePost?.author?._id === userId && (
                  <div className="edit-delete">
                    <button className="btn">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </div>
                )}
              </div>
              <img className="single-img" src={imageUrl} alt="" />

              <div className="single-post-details">
                <div className="post-cat">
                  {singlePost?.category?.map((c) => (
                    <div className="badge" key={c}>
                      {c || "Uncategorized"}
                    </div>
                  ))}
                </div>
                <div className="post-container">
                  <div className="author-info">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                      alt=""
                    />
                    <h4>
                      <b>{singlePost?.author?.username}</b>
                    </h4>
                  </div>
                  <p>
                    {singlePost &&
                      singlePost.updatedAt &&
                      singlePost.updatedAt
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                  </p>
                </div>

                <div className="post-desc">
                  <p>{singlePost?.description}</p>
                </div>
              </div>

              {/* Comments */}
              <div className="comments-section">
                <h3>05 Comments</h3>
                <div className="comment">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    alt=""
                  />
                  <div className="comment-details">
                    <h4>John Doe</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam quaerat quod, quibusdam quod quaerat quaerat
                      quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                      quaerat quaerat quaerat
                    </p>
                    <div className="post-cat">
                      <div className="badge">Edit</div>
                      <div className="badge">Reply</div>
                    </div>
                    <div className="cmment-input">
                      <input type="text" placeholder="Add a comment" />
                      <button className="btn">Reply</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reply */}
              <div className="reply">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt=""
                />
                <div className="reply-details">
                  <h4>John Doe</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam quaerat quod, quibusdam quod quaerat quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                    quaerat quaerat quaerat
                  </p>
                  <div className="post-cat">
                    <div className="badge">Edit</div>
                    <div className="badge">Reply</div>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="comments-section">
                <div className="comment">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    alt=""
                  />
                  <div className="comment-details">
                    <h4>John Doe</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam quaerat quod, quibusdam quod quaerat quaerat
                      quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                      quaerat quaerat quaerat
                    </p>
                    <div className="post-cat">
                      <div className="badge">Edit</div>
                      <div className="badge">Reply</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reply */}
              <div className="reply">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt=""
                />
                <div className="reply-details">
                  <h4>John Doe</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam quaerat quod, quibusdam quod quaerat quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                    quaerat quaerat quaerat
                  </p>
                  <div className="post-cat">
                    <div className="badge">Edit</div>
                    <div className="badge">Reply</div>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="comments-section">
                <div className="comment">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    alt=""
                  />
                  <div className="comment-details">
                    <h4>John Doe</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam quaerat quod, quibusdam quod quaerat quaerat
                      quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                      quaerat quaerat quaerat
                    </p>
                    <div className="post-cat">
                      <div className="badge">Edit</div>
                      <div className="badge">Reply</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reply */}
              <div className="reply">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt=""
                />
                <div className="reply-details">
                  <h4>John Doe</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam quaerat quod, quibusdam quod quaerat quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                    quaerat quaerat quaerat
                  </p>
                  <div className="post-cat">
                    <div className="badge">Edit</div>
                    <div className="badge">Reply</div>
                  </div>
                </div>
              </div>

              {/* Submit comments */}
              <div className="submit-comment">
                <h4>Leave a comment</h4>
                <form>
                  <textarea
                    name=""
                    id=""
                    cols="3"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                  <button className="btn submit">Submit</button>
                </form>
              </div>
            </>
          )}
        </div>
        <div className="single-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
