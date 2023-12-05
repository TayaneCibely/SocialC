import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"

export default function Topbar() {
  const {user} = useContext(AuthContext);
  const PF = process.env.REAT_APP_PUBLIC_FOLDER;

  return (
    <div className="Container">
      <div className="logo">
        <Link className="bottonPost">
          <img src="assets/ArrowFatRight.svg" alt="" />
        </Link>
        <div className="text">SocialCompass</div>
      </div>
      <div className="topbar-right">
        <div className="icon">
          <img src="assets/GlobeHemisphereEast.svg" alt="" />
        </div>
        <div className="icon">
          <img src="/assets/Bell.svg" alt="" />
        </div>
        <Link className="name" to={`/profile/${user.username}`}/>
        <img
          src={ user.profilePicture
            ? PF + user.profilePicture : PF + "userIcon.png"}
          alt=""
          className="userIcon"
        />
      </div>
    </div>
  );
}

