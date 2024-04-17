import { Link } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile" style={{ marginTop: "100px" }}>
      <div className="container profile-container">
        <div className="my-posts mb">
          <Link to={"/"}>
            <button className="btn">My Posts</button>
          </Link>
        </div>
        <div className="pro-pic mb">
          <form style={{ position: "relative" }}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <input className="pro-pic-input" type="file" accept="image/*" />
          </form>
        </div>
        <div className="profile-name mb">
          <h4>Profile Name</h4>
        </div>
        <div className="profile-details-sec">
          <form>
            <input className="mb" type="text" placeholder="Name" />
            <input className="mb" type="email" placeholder="Email" />
            <input className="mb" type="password" placeholder="Old Password" />
            <input className="mb" type="password" placeholder="New Password" />
            <input
              className="mb"
              type="password"
              placeholder="Confirm New Password"
            />
            <button className="btn">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
