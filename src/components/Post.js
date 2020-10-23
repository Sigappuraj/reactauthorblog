import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const history = useHistory();
  const openPost = () => history.push(`posts/${props.id}`);
  return (
    <div className="container">
      <h3>{props.title}</h3>
      <p>{props.name}</p>
      <p>
        {props.isSummary
          ? `${props.content.substring(0, 100)}...`
          : props.content}
      </p>
      {props.isSummary ? <Button onClick={openPost}>Read more</Button> : null}
    </div>
  );
};

export default Post;
