import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Post from "../components/Post";
import { Button } from "reactstrap";

const PostPage = () => {
  const [post, setPost] = useState({});

  const { params } = useRouteMatch();
  const { goBack } = useHistory();

  useEffect(() => {
    // fetch(`https://zyfvr.sse.codesandbox.io/posts/${params.id}`)
    const config = {
      method: "GET",
      headers: {
        origin: "https://x89jk.csb.app/"
      }
    };
    fetch(`https://r9sg2.sse.codesandbox.io/posts/${params.id}`, config)
      .then((res) => res.json())
      .then((data) => setPost(data.post));
  }, [params]);

//   post.some.some();

  return (
    <>
      <Button onClick={goBack}>Back</Button>
      <Post
        id={post._id}
        name={post.author?.name}
        title={post.title}
        content={post.content}
      />
    </>
  );
};

export default PostPage;
