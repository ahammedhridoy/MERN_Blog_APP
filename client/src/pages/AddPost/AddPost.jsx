import "./AddPost.css";
import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const AddPost = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const BASE_URL = "http://localhost:3000/api";
  console.log(title, thumbnail, category, description);

  // create post
  const createPost = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/post/create`, {
        title,
        thumbnail,
        category,
        description,
      });
      if (data?.status === 200) {
        toast.success("Post created successfully");
        // navigate("/");
      }
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
      <h1>Add Post</h1>
      <form onSubmit={createPost}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="input-file">
          <input
            className="file"
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
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
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <ReactQuill
          modules={modules}
          formats={formats}
          className="quill"
          theme="snow"
          onChange={(e) => setDescription(e)}
        />
        <button className="btn" style={{ marginTop: "20px" }}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddPost;
