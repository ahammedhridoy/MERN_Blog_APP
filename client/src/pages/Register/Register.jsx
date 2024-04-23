/* eslint-disable no-undef */
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:3000/api";
  const handleChange = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password || !email) {
        return toast.error("Need to fill all the fields");
      }
      const { data } = await axios.post(`${BASE_URL}/user/register`, {
        username,
        email,
        password,
      });
      if (!data) {
        return toast.error("There is an error during registration");
      }
      toast.success("Registration Successful");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("Couldn't register user try again");
    }
  };
  return (
    <div className="register">
      <ToastContainer />
      <div className="card">
        <h1 className="title">Register</h1>

        <form onSubmit={handleChange}>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <button type="submit" className="btn register-btn">
            Register
          </button>
        </form>
        <br />
        <p>
          Already have an account?{" "}
          <Link className="link" to="/login">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
