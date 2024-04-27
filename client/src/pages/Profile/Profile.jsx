import { useNavigate, useParams } from "react-router-dom";
import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const { currentUser, setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  const BASE_URL = "http://localhost:3000/api";
  const { id } = useParams();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // console.log(currentPassword, newPassword, confirmPassword);

  // Upload profile picture
  const uploadPic = async (e) => {
    e.preventDefault();
    try {
      if (!avatar) {
        return toast.error("Please select an image");
      }
      const formData = new FormData();
      formData.append("avatar", avatar);
      const { data } = await axios.put(
        `${BASE_URL}/user/avatar/${currentUser._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      if (data?.user) {
        toast.success("Profile picture uploaded successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch User
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/user/${id}`);
        if (!data) {
          return navigate("/login");
        }
        setUser(data?.user);
        setUserName(data?.user?.username);
        setEmail(data?.user?.email);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  // Update User
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      if (
        !userName ||
        !email ||
        !currentPassword ||
        !newPassword ||
        !confirmPassword
      ) {
        return toast.error("Please fill all the fields");
      }

      if (newPassword !== confirmPassword) {
        return toast.error("Passwords do not match");
      }
      const { data } = await axios.patch(
        `${BASE_URL}/user/update/${id}`,
        {
          username: userName,
          email,
          currentPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data?.updatedUser) {
        toast.success("User updated successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Couldn't update user. Please try again");
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="profile">
      <Toaster />
      <div className="container profile-container" style={{ margin: "0 20px" }}>
        <div className="pro-pic mb">
          <form
            style={{ position: "relative" }}
            encType="multipart/form-data"
            onSubmit={uploadPic}
          >
            {avatar ? (
              <img src={URL.createObjectURL(avatar)} alt="" />
            ) : (
              <img
                src={
                  user?.avatar === ""
                    ? "https://i.stack.imgur.com/l60Hf.png"
                    : "http://localhost:3000/uploads/" + user?.avatar
                }
                alt="avatar"
              />
            )}
            <input
              className="pro-pic-input"
              type="file"
              name="avatar"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            <button className="btn" type="submit">
              Upload
            </button>
          </form>
        </div>
        <div className="profile-name mb">
          <h2 className="username">{user?.username}</h2>
        </div>
        <div className="profile-details-sec">
          <form onSubmit={updateUser}>
            <input
              className="mb"
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="mb"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="mb"
              type="password"
              placeholder="Current Password"
              onChange={(e) => setCurrentPassword(e.target.value)}
              value={currentPassword}
            />
            <input
              className="mb"
              type="password"
              placeholder="New Password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
            <input
              className="mb"
              type="password"
              placeholder="Confirm New Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <button className="btn" type="submit">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
