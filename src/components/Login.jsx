import React, { useState } from "react";
import wxlogo from "../assets/wxlogo.png";
import "../styles/login.css";
import SignInScreen from "./SignInScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
       
      <div className="login__bg">
        <img className="login__img" src={wxlogo} alt="" />
        <button className="login__btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login__grad" />
      </div>
      <div className="login__body">
         {signIn ? (
            <SignInScreen />
        ):(
            <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch Anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div type="text" className="login__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button className="login__start" onClick={() => setSignIn(true)}>
                GET STARTED
              </button>
            </form>
          </div>
        </>
        )}
      </div>
    </div>
  );
}

export default Login;
// "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
