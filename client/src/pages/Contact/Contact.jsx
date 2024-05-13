import { useState } from "react";
import Banner from "../../component/Banner/Banner";
import "./Contact.css";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
const Contact = () => {
  // Contact states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // Base URL
  const BASE_URL = "http://localhost:3000/api";

  // Contact
  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/contact`, {
        name,
        email,
        subject,
        message,
      });

      if (res?.status === 200) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        toast.success("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Message failed to send");
    }
  };

  return (
    <div className="contact">
      <Toaster />
      <Banner />

      <div className="container contact-wrap">
        <div className="contact-from">
          <h1 className="title">Contact Us</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
          <button className="btn submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
