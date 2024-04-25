/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Category = () => {
  const { posts } = useContext(GlobalContext);
  console.log(posts);
  return (
    <div className="category">
      <div className="category-container">
        {posts.map((p) => (
          <div key={p?._id} className="badge">
            <Link
              to={`/category/${p?.category}`}
              className="link"
              style={{ color: "white" }}
            >
              {p?.category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
