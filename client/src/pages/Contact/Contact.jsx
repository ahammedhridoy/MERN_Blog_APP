import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <img
        className="contact-img"
        src="https://cdn.pixabay.com/photo/2017/05/30/01/36/contact-us-2355449_960_720.jpg"
        alt=""
      />

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
