import "./SingleBlog.css";
import Sidebar from "./../../component/Sidebar/Sidebar";
import { Link } from "react-router-dom";
const SingleBlog = () => {
  return (
    <div
      className="single-blog"
      style={{ padding: "0 20px", marginTop: "80px" }}
    >
      <div className="container single-blog-wrap">
        <div className="single-left">
          <div className="post-title">
            <div>
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
              </Link>
            </div>

            <div className="edit-delete">
              <button className="btn">Edit</button>
              <button className="btn-delete">Delete</button>
            </div>
          </div>
          <img
            className="single-img"
            src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
            alt=""
          />

          <div className="single-post-details">
            <div className="post-cat">
              <div className="badge">Education</div>
              <div className="badge">Technology</div>
            </div>
            <div className="post-container">
              <div className="author-info">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  alt=""
                />
                <h4>
                  <b>John Doe</b>
                </h4>
              </div>
              <p>1 April, 2024</p>
            </div>

            <div className="post-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
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
                  Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                  quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                  quaerat quaerat
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
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat
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
                  Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                  quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                  quaerat quaerat
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
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat
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
                  Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                  quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                  quaerat quaerat
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
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat
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
        </div>
        <div className="single-right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
