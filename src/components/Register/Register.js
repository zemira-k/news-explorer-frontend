// import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import FormField from "../FormField/FormField";
import { useFormWithValidation } from "../FormValidation/FormValidation";

function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({ values, resetForm });
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
        isValid={isValid}
      >
        <FormField
          label="Email"
          name="email"
          placeholder="Enter email"
          value={values.email || ""}
          onChange={(e) => handleChange(e)}
          error={errors.email}
        ></FormField>
        <FormField
          label="Password"
          name="password"
          placeholder="Enter password"
          value={values.password || ""}
          onChange={(e) => handleChange(e)}
          error={errors.password}
          minlength="3"
        ></FormField>
        <FormField
          label="Username"
          name="username"
          placeholder="Enter your username"
          value={values.username || ""}
          onChange={(e) => handleChange(e)}
          error={errors.username}
          minlength="2"
          maxlength="30"
        ></FormField>
        {props.emailConflict && (
          <span
            className="form__input-error form__input-error_type_center form__input-error_active"
            id="form-error"
          >
            This email is not available
          </span>
        )}
      </PopupWithForm>
    </div>
  );
}

export default Register;
