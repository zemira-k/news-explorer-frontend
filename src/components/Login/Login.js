import React, { useState } from "react";
// import { Link } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import FormField from "../FormField/FormField";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmitLogin();
  }

  return (
    <div>
      <PopupWithForm
        header="Sign in"
        name="login"
        buttonTitle="Sign in"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        footer="Sign up"
        onOverlayClick={props.onOverlayClick}
        onModalClick={props.onModalClick}
        onRegisterClick={props.onRegisterClick}
      >
        <FormField
          label="Email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></FormField>
        <FormField
          label="Password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></FormField>
      </PopupWithForm>
    </div>
  );
}

export default Login;
