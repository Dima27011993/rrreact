import React from "react";
import m from "./post.module.css";
const Post = (props) => {

  return (
    <div className={m.Post}>
      <img src="https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg" />
      {props.message}
      <div>
        <span>Like</span>
        {props.likesCount}

      </div>
    </div>
  );
};
export default Post;
