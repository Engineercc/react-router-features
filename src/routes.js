import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Page404Error from "./pages/Page404Error";
import BlogPage404Error from "./pages/blog/BlogPage404Error";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import HomeLayout from "./pages/HomeLayout";

const routes = [
  {
    path: "/",
    name: "home",
    element: <HomeLayout />,
    auth: true,
    children: [
      {
        index: true,
        name: "index",
        element: <Home />,
      },
      {
        path: "contact",
        name: "contact",
        element: <Contact />,
        admin: true,
      },
      {
        path: "blog",
        name: "blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            name: "index",
            element: <Blog />,
          },
          {
            path: "categories",
            name: "categories",
            element: <Categories />,
          },
          {
            path: "post/:id/:url",
            name: "post",
            element: <Post />,
          },
          {
            path: "*",
            name: "notFound",
            element: <BlogPage404Error />,
          },
        ],
      },
      {
        path: "profile",
        name: "profile",
        element: <Profile />,
        auth: true,
      },
    ],
  },
  {
    path: "auth",
    name: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        name: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    name: "notFound",
    element: <Page404Error />,
  },
];
console.log(routes[0].children);
const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    if (route?.children) {
      route.children = authMap(route.children);
    }

    return route;
  });

export default authMap(routes);
