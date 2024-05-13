import "./SingleBlog.css";
import Sidebar from "./../../component/Sidebar/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../component/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";
import CommentArea from "../../component/CommentArea/CommentArea";

const SingleBlog = () => {
  const {
    fetchSinglePost,
    singlePost,
    addComment,
    loading,
    setComment,
    comment,
    commentLoading,
    fetchPosts,
    BASE_URL,
  } = useContext(GlobalContext);

  const { id } = useParams();
  const imageUrl = `http://localhost:3000/uploads/${singlePost.thumbnail}`;
  const avatarUrl = `http://localhost:3000/uploads/${singlePost?.author?.avatar}`;
  const commentAvatarUrl = `http://localhost:3000/uploads`;
  const { currentUser, setUser } = useContext(AuthContext);
  const authorId = currentUser?._id;
  console.log(currentUser);
  const navigate = useNavigate();
  const token =
    JSON.parse(localStorage.getItem("token")) || localStorage.getItem("token");
  // Fetch User
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/user/${currentUser?._id}`
        );
        if (!data) {
          return navigate("/login");
        }
        setUser(data?.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  // Delete post

  const deletePost = async () => {
    try {
      await axios.delete(`${BASE_URL}/post/delete/${id}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Post deleted successfully");
      fetchPosts();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete comment
  const deleteComment = async (postId, commentId) => {
    try {
      // Make the delete request
      const res = await axios.delete(
        `${BASE_URL}/post/${postId}/comment/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res?.data?.post) {
        toast.success("Comment deleted successfully");
        fetchSinglePost(id);
      }
    } catch (error) {
      // Handle error response
      console.error("Error:", error.res.data.message);
    }
  };

  useEffect(() => {
    fetchSinglePost(id);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div
      className="single-blog"
      style={{ padding: "0 20px", marginTop: "80px" }}
    >
      <Toaster position="top-center" reverseOrder={false} />
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

                {singlePost?.author?._id === authorId && (
                  <div className="edit-delete">
                    <Link to={`/post/edit/${singlePost?._id}`}>
                      <button className="btn">Edit</button>
                    </Link>
                    <button className="btn-delete" onClick={() => deletePost()}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <img className="single-img" src={imageUrl} alt="" />

              <div className="single-post-details">
                <div className="post-cat">
                  <div className="badge">
                    <Link
                      to={`/category/${singlePost?.category}`}
                      className="link"
                      style={{ color: "white" }}
                    >
                      {singlePost?.category}
                    </Link>
                  </div>
                </div>
                <div className="post-container">
                  <div className="author-info">
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="" />
                    ) : (
                      <img
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                        alt=""
                      />
                    )}
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
                  <p
                    dangerouslySetInnerHTML={{
                      __html: singlePost?.description,
                    }}
                  ></p>
                </div>
              </div>

              {/* Comments */}
              {commentLoading ? (
                <Loading />
              ) : (
                <div className="comments-section">
                  <h3>{singlePost?.comments?.length} Comments</h3>
                  {singlePost?.comments?.map((comment) => (
                    <div className="comment" key={comment._id}>
                      <img
                        src={`${commentAvatarUrl}/${comment.userId.avatar}`}
                        alt=""
                      />

                      <div className="comment-details">
                        <h4>{comment?.userId?.username}</h4>

                        <p>{comment?.text}</p>

                        {currentUser?._id === comment?.userId?._id && (
                          <>
                            <div className="post-cat">
                              <div
                                className="badge"
                                style={{ backgroundColor: "red" }}
                                onClick={() =>
                                  deleteComment(singlePost?._id, comment?._id)
                                }
                              >
                                Delete
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Submit comments */}
              {currentUser && (
                <CommentArea
                  comment={comment}
                  setComment={setComment}
                  addComment={addComment}
                  id={id}
                />
              )}
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
