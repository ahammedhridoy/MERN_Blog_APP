/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:3000/api";
  const { setCurrentUser } = useContext(AuthContext);

  // Login
  const handleChange = async (e) => {
    e.preventDefault();
    try {
      if (!password || !email) {
        return toast.error("Please fill all the fields");
      }
      const { data } = await axios.post(`${BASE_URL}/user/login`, {
        email,
        password,
      });
      if (!data) {
        return toast.error("There is an error during login. Please try again");
      }
      setCurrentUser(data?.user);
      localStorage.setItem("token", JSON.stringify(data?.token));
      setTimeout(() => {
        navigate("/");
      }, 2000);
      toast.success("Login Successful");
    } catch (error) {
      console.log(error);
      toast.error("Couldn't login try again");
    }
  };

  return (
    <div className="login">
      <ToastContainer />
      <div className="card">
        <h1 className="title">Login</h1>

        <form onSubmit={handleChange}>
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
          <button type="submit" className="btn login-btn">
            Login
          </button>
        </form>
        <br />
        <p>
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
