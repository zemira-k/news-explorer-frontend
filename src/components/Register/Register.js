import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import FormField from "../FormField/FormField";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <div>
      <PopupWithForm
        header="Sign up"
        name="register"
        buttonTitle="Sign up"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        onOverlayClick={props.onOverlayClick}
        onModalClick={props.onModalClick}
        onLoginClick={props.onLoginClick}
        footer="Sign in"
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
        <FormField
          label="Username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></FormField>
        <span
          className="form__input-error form__input-error_type_center form__input-error_active"
          id="formName-error"
        >
          This email is not available
        </span>
      </PopupWithForm>
    </div>
  );
}

export default Register;
