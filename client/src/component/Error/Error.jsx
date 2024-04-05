import { Link } from "react-router-dom";
import "./Error.css";
const Error = () => {
  return (
    <div className="error">
      <p className="_404">404</p>
      <p className="error-text">Page Not Found</p>
      <Link to={"/"}>
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
