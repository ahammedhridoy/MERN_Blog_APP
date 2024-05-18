import { useContext, useEffect, useState } from "react";
import "./UpdatePost.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import toast, { Toaster } from "react-hot-toast";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

const UpdatePost = () => {
  const { setSinglePost, singlePost, fetchPosts, BASE_URL } =
    useContext(GlobalContext);
  const [setUser] = useState({});
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  const { currentUser } = useContext(AuthContext);
  const [setLoading] = useState(true);
  const [single, setSingle] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };
  //Check if user is logged in
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
    if (currentUser?._id !== singlePost?.author?._id) {
      navigate("/");
    }
  }, []);

  //   Quill
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
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
  }, [BASE_URL, setUser, currentUser, navigate]);

  // Single post
  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/post/single/${id}`);
        setSingle(res?.data);
        setTitle(res?.data?.title);
        setCategory(res?.data?.category);
        setDescription(res?.data?.description);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSinglePost();
  }, [BASE_URL, setSinglePost, id, setLoading]);

  // update post
  const updatePost = async (e) => {
    e.preventDefault();
    try {
      if (!title || !category || !description) {
        toast.error("All fields are required");
        return;
      }
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      } else {
        formData.append("thumbnail", single?.thumbnail);
      }

      const res = await axios.patch(`${BASE_URL}/post/edit/${id}`, formData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res?.data?.updatedPost) {
        toast.success("Post updated successfully");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
      if (res?.status !== 200) {
        toast.error("Error updating post");
      }
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="add-post">
        <Toaster position="top-center" reverseOrder={false} />
        <h1 style={{ margin: "20px 0" }}>Update Post</h1>

        <form onSubmit={updatePost} encType="multipart/form-data" method="post">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <div className="input-file">
            <input
              className="file"
              type="file"
              accept="image/*"
              name="thumbnail"
              onChange={handleFileChange}
            />
          </div>
          <img
            src={
              thumbnail
                ? URL.createObjectURL(thumbnail)
                : `http://localhost:3000/uploads/${singlePost?.thumbnail}`
            }
            className="add-post-img"
            alt=""
          />
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            <option value={singlePost?.category}>{singlePost?.category}</option>
            <option value="Uncategorized">Uncategorized</option>
            <option value="Travel">Travel</option>
            <option value="Food & Cooking">Food & Cooking</option>
            <option value="Health & Wellness">Health & Wellness</option>
            <option value="Fashion & Style">Fashion & Style</option>
            <option value="Fitness & Exercise">Fitness & Exercise</option>
            <option value="Technology">Technology</option>
            <option value="Personal Finance">Personal Finance</option>
            <option value="Home & Decor">Home & Decor</option>
            <option value="Education & Learning">Education & Learning</option>
            <option value="Sports & Media">Sports & Media</option>
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            className="quill"
            theme="snow"
            onChange={setDescription}
            value={description}
          />
          <button type="submit" className="btn" style={{ marginTop: "20px" }}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
