import React from "react";
import "../styles/Profile.css";
import NavBar from "./NavBar";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { auth } from "../firebase";

import { selectUser } from "../features/userSlice";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <NavBar />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__screen">
          <img src={avatar} alt="" />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans {`(Freemium)`}</h3>
              <div>
                <button className="profile__signout" onClick={()=>{
                  alert("Working On this Feature.")
                }}>Subscribe</button>
              </div>
              <button
                className="profile__signout"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
