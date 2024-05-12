import Banner from "../../component/Banner/Banner";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <Banner />

      <div className="container contact-wrap">
        <div className="contact-from">
          <h1 className="title">Contact Us</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="btn submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
