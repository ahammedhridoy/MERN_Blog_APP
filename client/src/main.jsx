import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import Profile from "./pages/Profile/Profile.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MyPosts from "./pages/MyPosts/MyPosts.jsx";
import DashboardLayout from "./component/Layout/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import AddPost from "./pages/AddPost/AddPost.jsx";
import Edit from "./pages/Edit/Edit.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/post/:id",
        element: <SingleBlog />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/my-posts",
        element: <MyPosts />,
      },
      {
        path: "/add-post",
        element: <AddPost />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalContextProvider>
        <RouterProvider router={router} />
      </GlobalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
