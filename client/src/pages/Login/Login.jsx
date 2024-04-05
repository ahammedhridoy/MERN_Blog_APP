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
      </div>
    </div>
  );
};

export default Login;
