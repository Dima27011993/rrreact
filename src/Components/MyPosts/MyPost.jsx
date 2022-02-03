import React from "react";
import m from './MyPost.module.css'
const MyPost = (props) => {
  return (
    <div>
      <div className={m.Post}>ava + discription</div>
      <div>MyPosts</div>
      <div>New Post</div>
      <textarea></textarea>
      <div>
        <button>add post</button>
      </div>
      <div>
        <button>post remove</button>
      </div>
    </div>
  );
};
export default MyPost;
