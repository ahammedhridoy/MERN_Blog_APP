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
  const { id } = useParams();
  const navigate = useNavigate();

  //   Check if user is logged in
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
  }, []);

  // Single post
  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/post/single/${id}`);
        await setSinglePost(data);
        setTitle(data.title);
        setDescription(data.description);
        setCategory(data.category);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSinglePost();
  }, []);

  // update post
  const updatePostFunc = async (e) => {
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
      formData.append("thumbnail", thumbnail);

      // Append thumbnail if it exists
      // if (thumbnail) {
      //   formData.append("thumbnail", thumbnail);
      // }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const res = await axios.patch(
        `${BASE_URL}/post/edit/${id}`,
        formData,
        config
      );

      console.log(res?.data);

      if (res?.data?.updatedPost) {
        setTitle("");
        setThumbnail(null);
        setDescription("");
        toast.success("Post updated successfully");
      } else {
        toast.error("Error updating post");
      }

      fetchPosts();
    } catch (error) {
      console.log(error);
      toast.error("Error updating post");
    }
  };

  return (
    <div>
      <div className="add-post">
        <Toaster position="top-center" reverseOrder={false} />
        <h1 style={{ margin: "20px 0" }}>Update Post</h1>

        <form
          onSubmit={updatePostFunc}
          encType="multipart/form-data"
          method="post"
        >
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
            />
          </div>

          {thumbnail ? (
            <img
              src={URL.createObjectURL(thumbnail)}
              className="add-post-img"
              alt=""
            />
          ) : (
            <img
              src={"http://localhost:3000/uploads/" + singlePost?.thumbnail}
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
