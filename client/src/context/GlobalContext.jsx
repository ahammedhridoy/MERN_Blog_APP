/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const BASE_URL = "http://localhost:3000/api";
  const [loading, setLoading] = useState(true);

  // All post
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/post/all`);
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ posts, loading, fetchPosts, singlePost, setSinglePost }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
