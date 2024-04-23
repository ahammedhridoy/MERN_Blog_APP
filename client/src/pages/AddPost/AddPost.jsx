import "./AddPost.css";
import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const AddPost = () => {
  const [value, setValue] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
      <form>
        <input type="text" placeholder="Title" />
        <div className="input-file">
          <input className="file" type="file" accept="image/*" />
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"
          className="add-post-img"
          alt=""
        />
        <select name="category">
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
          value={value}
          onChange={setValue}
        />
        <button className="btn" style={{ marginTop: "20px" }}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddPost;
