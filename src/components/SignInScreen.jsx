import React, { useRef } from "react";
import "../styles/signin.css";
import { auth } from "../firebase";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="signin">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address Here." />
        <input ref={passwordRef} type="password" placeholder="Enter Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="si__link" onClick={register}>
            Sign Up Now.
          </span> <span className="si__span">New to WebFlix ? </span>
        </h4>
       
        <span className="si__span1">If new? Tap the above Sign Up Now!</span>
      </form>
    </div>
  );
}

export default SignInScreen;
