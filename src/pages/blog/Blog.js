// @ts-nocheck
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { url } from "./../../utils";
import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    searchParams.set("search", search);
    if (!search) {
      searchParams.delete("");
    }
    setSearchParams(Object.fromEntries([...searchParams]));
  }, [search]);
  const posts = [
    {
      id: 1,
      title: "blog 1",
      url: "post-1",
    },
    {
      id: 2,
      title: "blog 2",
      url: "post-2",
    },
  ];
  return (
    <div>
      <input
        type="text"
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {posts.map((post) => {
          const { id, title, url: postUrl } = post;
          return (
            <li key={id}>
              <Link
                to={url("home.blog.post", {
                  id,
                  url: postUrl,
                })}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
