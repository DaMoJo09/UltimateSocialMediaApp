import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";

function Login() {
  const signIn = () => {};

  return (
    <div className="login">
      <div className="login__conatainer">
        <img src="https://i.imgur.com/VxoCi9j.png" alt="" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
