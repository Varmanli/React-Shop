import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginPage() {
  const [login, setLogin] = useState(true);
  function setLoginHandler() {
    setLogin(!login);
  }
  return (
    <>
      {login ? (
        <Login setLoginHandler={setLoginHandler} />
      ) : (
        <SignUp setLoginHandler={setLoginHandler} />
      )}
    </>
  );
}

export default LoginPage;
