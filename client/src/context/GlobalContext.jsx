/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const BASE_URL = "http://localhost:3000/api";
  const [loading, setLoading] = useState(true);
  const token = JSON.parse(localStorage.getItem("token"));
  const [comment, setComment] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);
  const postId = localStorage.getItem("postId");

  // Send Like
  const sendLike = async (id) => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}/post/like/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data?.post) {
        toast.success("Post liked successfully");
      }
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  // Add comment
  const addComment = async (id) => {
    setCommentLoading(true);
    try {
      if (!comment) {
        toast.error("Comment cannot be empty");
        return;
      }
      const { data } = await axios.patch(
        `${BASE_URL}/post/comment/${id}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data?.post) {
        toast.success("Comment added successfully");
        fetchSinglePost(postId);
        fetchPosts();
        setComment("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCommentLoading(false);
    }
  };

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

  // Single post
  const fetchSinglePost = async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/post/single/${id}`);
      setSinglePost(data);
      localStorage.setItem("postId", id);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    // fetchSinglePost();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        posts,
        loading,
        fetchPosts,
        singlePost,
        sendLike,
        addComment,
        fetchSinglePost,
        setComment,
        comment,
        commentLoading,
        BASE_URL,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
