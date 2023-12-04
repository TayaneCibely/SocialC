import React from "react";
import {
  PiArrowFatRightFill,
  PiGlobeHemisphereEastThin,
  PiBell,
} from "react-icons/pi";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="Container">
      <div className="logo">
        <Link className="bottonPost">
          <PiArrowFatRightFill />
        </Link>
        <div className="text">SocialCompass</div>
      </div>
      <div className="topbar-right">
        <div className="icon">
          <PiGlobeHemisphereEastThin />
        </div>
        <div className="icon">
          <PiBell />
        </div>
        <div className="text">Tayane Cibely</div>
        <img
          src={process.env.PUBLIC_URL + "/assets/userIcon.svg"}
          alt=""
          className="userIcon"
        />
      </div>
    </div>
  );
}
