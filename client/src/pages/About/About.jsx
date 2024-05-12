import Banner from "../../component/Banner/Banner";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <Banner />
      <div className="container about-wrap">
        <div className="left">
          <img
            src="https://cdn.pixabay.com/photo/2015/03/22/15/26/blog-684748_1280.jpg"
            alt=""
          />
        </div>
        <div className="right">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae fugiat eius impedit cupiditate iure facilis, vero amet
            nobis atque sed aut alias quidem eum maxime unde provident voluptate
            earum dolores. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laborum deserunt illum harum ipsam aperiam, cum mollitia fugit
            minus nemo odio facere commodi voluptate doloribus, dolores
            assumenda quia. Magni, quod placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
