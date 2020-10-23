import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

const Author = () => {
  const [author, setAuthor] = useState([]);

  const { params } = useRouteMatch();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://r9sg2.sse.codesandbox.io/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  useEffect(() => {
    fetch(`https://r9sg2.sse.codesandbox.io/authors/${params.authorId}`)
      .then((res) => res.json())
      .then((data) => setAuthor(data.author));
  }, [params]);
  return (
      <ul>
      {posts.map((post,index)=>{
          if(author._id === post.author._id){
              return (
                  <>
                  <li key={index}>
                      <p>
                  Title: {post.title}
                  <br />
                  Author: {post.author.name}
                  <br />
                  {post.content}
                </p>

                  </li>
                  </>
              )
          }
      })}
      </ul>
  );
};

export default Author;
