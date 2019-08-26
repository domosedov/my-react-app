import React from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Profile;
