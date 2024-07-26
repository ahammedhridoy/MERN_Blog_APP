import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const BASE_URL = "https://mern-blog-app-backend-jet.vercel.app";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/subscribe`, { email });
      setMessage(response.data.message);
      console.log(response);
      if (response?.data?.status === 200) {
        setMessage(response.data.message);
        toast.success("Subscribed successfully");
      }
      setEmail("");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="newsletter">
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {!error ? (
          <p style={{ margin: "10px 0", color: "green" }} className="success">
            {message}
          </p>
        ) : (
          <p style={{ margin: "10px 0", color: "red" }} className="">
            {error}
          </p>
        )}

        <button type="submit" className="btn">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
