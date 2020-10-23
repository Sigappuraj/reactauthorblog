import React from "react";
import Post from "../components/Post";
import useHover from "../hooks/useHover";
import usePosts from "../hooks/usePosts";

const Home = () => {
  const posts = usePosts();

const isHovered = useHover("#title")

  return (
    <div className="container">
      <h1 style={{ color: isHovered ? "red" : "black" }} id="title">
        Welcome To Blog
      </h1>
      {posts.map((post, index) => {
        return (
          <Post
            id={post._id}
            key={index}
            title={post.title}
            name={post.author.name}
            content={post.content}
            isSummary
          />
        );
      })}
    </div>
  );
};

export default Home;
