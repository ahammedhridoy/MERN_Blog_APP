/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <h1 className="title">Login</h1>

        <form>
          <input type="email" placeholder="email" /> <br />
          <input type="password" placeholder="password" /> <br />
          <button className="btn login-btn">Login</button>
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
