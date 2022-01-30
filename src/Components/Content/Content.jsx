import React from "react";
import Post from "../Post/post";
import m from "./Content.module.css";
const Profile = (props) => {

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
      <Post message = 'post 1' likesCount = '23'/>
      <Post message = 'post 2' likesCount = '0'/>
      <Post message = 'post 3'/>
      <Post message = 'post 4'/>
      <Post message = 'post 5'/>
      <Post message = 'post 6'/>
        <textarea></textarea>
        <div><button>add post</button></div>
       <div><button>post remove</button></div> 
      </div>
    </div>
  );
};
export default Profile;
