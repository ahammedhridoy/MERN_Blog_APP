import "./AddPost.css";
import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const AddPost = () => {
  const { currentUser } = useContext(AuthContext);
  const { fetchPosts } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("uncategorized");
  const [description, setDescription] = useState("");
  const BASE_URL = "http://localhost:3000/api";
  const token = JSON.parse(localStorage.getItem("token"));

  // create post
  const createPost = async (e) => {
    e.preventDefault();
    try {
      if (!title || !category || !description || !thumbnail) {
        toast.error("All fields are required");
        return;
      }
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("thumbnail", thumbnail);

      const res = await axios.post(`${BASE_URL}/post/create`, formData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res?.data?.newPost) {
        setTitle("");
        setThumbnail("");
        setDescription("");
        toast.success("Post created successfully");
      }
      if (res?.status !== 200) {
        toast.error("Error creating post");
      }
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

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

  return (
    <div className="add-post">
      <Toaster position="top-center" reverseOrder={false} />
      <h1>Add Post</h1>

      <form onSubmit={createPost} encType="multipart/form-data" method="post">
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
            onChange={(e) => setThumbnail(e.target.files[0])}
            // value={thumbnail}
          />
        </div>

        {thumbnail && (
          <img
            src={URL.createObjectURL(thumbnail)}
            className="add-post-img"
            alt=""
          />
        )}
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="uncategorized">Uncategorized</option>
          <option value="education">Education</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
        <ReactQuill
          modules={modules}
          formats={formats}
          className="quill"
          theme="snow"
          onChange={(e) => setDescription(e)}
          value={description}
        />
        <button className="btn" style={{ marginTop: "20px" }}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddPost;
