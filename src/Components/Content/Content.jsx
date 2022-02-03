import React from "react";
import Post from "./../Post/post";
import m from "./Content.module.css";
import MyPost from "./../MyPosts/MyPost";
const Profile = (props) => {
  // let s = {
  //   'content':'Content_Content__HE1wA'z
  // }

  let postArray = props.postData.map((d) => (
    <Post message={d.message} likesCount={d.likesCount} />
  ));
  return (
    <div className={m.Content}>
      <img
        className={m.Image}
        src="https://www.immune-image.eu/wp-content/uploads/2020/01/publications-immune-image.jpg"
      />
      <MyPost />
      {postArray}
    </div>
  );
};
export default Profile;
