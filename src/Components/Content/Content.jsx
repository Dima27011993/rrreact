import React from "react";
import m from "./Content.module.css";
const Profile = () => {

  // let s = {
  //   'content':'Content_Content__HE1wA'
  // }
  return (
    <div className={m.Content}>
      <img className={m.Image} src="https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg" />
      <div className={m.Post}>
        <div className={m.Post}>ava + discription</div>
        <div>MyPosts</div>
        <div>New Post</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};
export default Profile;
