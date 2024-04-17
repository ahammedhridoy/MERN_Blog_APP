import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <h1 className="title">Register</h1>

        <form>
          <input type="text" placeholder="username" /> <br />
          <input type="email" placeholder="email" /> <br />
          <input type="password" placeholder="password" /> <br />
          <button className="btn register-btn">Register</button>
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
