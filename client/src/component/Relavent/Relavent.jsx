import { Link } from "react-router-dom";
import "./Relavent.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { LiaCommentSolid } from "react-icons/lia";

const Relavent = () => {
  return (
    <div className="latest-post-wrap">
      <div className="container">
        {/* Title */}
        <div className="latest-title">Relavent Posts</div>

        {/* Posts */}
        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
            <div className="latest-post-cat">
              <div className="badge">Education</div>
              <div className="badge">Technology</div>
            </div>
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
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
                    <b>John Doe</b>
                  </h4>
                </div>
                <p>1 April, 2024</p>
              </div>
              <div className="latest-post-likes-comments">
                <div className="latest-post-likes">
                  <FcLikePlaceholder className="latest-like" />
                  {/* <FcLike className="like" /> */}
                  <span>100</span>
                </div>
                <div className="latest-post-comments">
                  <LiaCommentSolid className="latest-dislike" />
                  <span>100</span>
                </div>
              </div>
            </div>
            <div className="latest-post-desc">
              <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
            <div className="latest-post-cat">
              <div className="badge">Education</div>
              <div className="badge">Technology</div>
            </div>
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
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
                    <b>John Doe</b>
                  </h4>
                </div>
                <p>1 April, 2024</p>
              </div>
              <div className="latest-post-likes-comments">
                <div className="latest-post-likes">
                  <FcLikePlaceholder className="latest-like" />
                  {/* <FcLike className="like" /> */}
                  <span>100</span>
                </div>
                <div className="latest-post-comments">
                  <LiaCommentSolid className="latest-dislike" />
                  <span>100</span>
                </div>
              </div>
            </div>
            <div className="latest-post-desc">
              <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
            <div className="latest-post-cat">
              <div className="badge">Education</div>
              <div className="badge">Technology</div>
            </div>
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
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
                    <b>John Doe</b>
                  </h4>
                </div>
                <p>1 April, 2024</p>
              </div>
              <div className="latest-post-likes-comments">
                <div className="latest-post-likes">
                  <FcLikePlaceholder className="latest-like" />
                  {/* <FcLike className="like" /> */}
                  <span>100</span>
                </div>
                <div className="latest-post-comments">
                  <LiaCommentSolid className="latest-dislike" />
                  <span>100</span>
                </div>
              </div>
            </div>
            <div className="latest-post-desc">
              <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
            <div className="latest-post-cat">
              <div className="badge">Education</div>
              <div className="badge">Technology</div>
            </div>
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
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
                    <b>John Doe</b>
                  </h4>
                </div>
                <p>1 April, 2024</p>
              </div>
              <div className="latest-post-likes-comments">
                <div className="latest-post-likes">
                  <FcLikePlaceholder className="latest-like" />
                  {/* <FcLike className="like" /> */}
                  <span>100</span>
                </div>
                <div className="latest-post-comments">
                  <LiaCommentSolid className="latest-dislike" />
                  <span>100</span>
                </div>
              </div>
            </div>
            <div className="latest-post-desc">
              <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
            <div className="latest-post-cat">
              <div className="badge">Education</div>
              <div className="badge">Technology</div>
            </div>
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
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
                    <b>John Doe</b>
                  </h4>
                </div>
                <p>1 April, 2024</p>
              </div>
              <div className="latest-post-likes-comments">
                <div className="latest-post-likes">
                  <FcLikePlaceholder className="latest-like" />
                  {/* <FcLike className="like" /> */}
                  <span>100</span>
                </div>
                <div className="latest-post-comments">
                  <LiaCommentSolid className="latest-dislike" />
                  <span>100</span>
                </div>
              </div>
            </div>
            <div className="latest-post-desc">
              <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="latest-post-card">
          <div className="latest-post-left">
            <img
              className="latest-post-img"
              src="https://cdn.pixabay.com/photo/2024/04/01/14/58/sierra-del-torcal-8669125_1280.jpg"
              alt=""
            />
            <div className="latest-post-cat">
              <div className="badge">Education</div>
              <div className="badge">Technology</div>
            </div>
          </div>

          <div className="latest-post-details">
            <div className="latest-post-title">
              <Link to={"/post"} className="link">
                <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
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
                    <b>John Doe</b>
                  </h4>
                </div>
                <p>1 April, 2024</p>
              </div>
              <div className="latest-post-likes-comments">
                <div className="latest-post-likes">
                  <FcLikePlaceholder className="latest-like" />
                  {/* <FcLike className="like" /> */}
                  <span>100</span>
                </div>
                <div className="latest-post-comments">
                  <LiaCommentSolid className="latest-dislike" />
                  <span>100</span>
                </div>
              </div>
            </div>
            <div className="latest-post-desc">
              <p className="truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quaerat quod, quibusdam quod quaerat quaerat quaerat
                quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                quaerat quaerat{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relavent;
