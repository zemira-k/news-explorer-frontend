import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Navigation(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <nav className="header__nav">
      <button
        onClick={props.onMenuClick}
        className={`header__menu ${
          props.loggedInSavedNews ? "header__menu_type_black" : ""
        }`}
      />
      <Link
        to="/"
        className={`header__link ${
          props.homeActive ? "header__link_type_active" : ""
        } ${props.loggedInSavedNews ? "header__link_type_black" : ""}`}
        onClick={props.onHomeClick}
      >
        Home
      </Link>
      {props.loggedin && (
        <Link
          to="/saved-news"
          className={`header__link ${
            props.homeActive ? "" : "header__link_type_active-black"
          } ${props.loggedInSavedNews ? "header__link_type_black" : ""}`}
          onClick={props.onSavedArticlesClick}
        >
          Saved articles
        </Link>
      )}
      <button
        type="submit"
        className={`header__button ${
          props.loggedInSavedNews ? "header__button_type_black" : ""
        }`}
        onClick={props.loggedin ? props.onLogoutClick : props.onLoginClick}
      >
        {props.loggedin ? currentUser.name : "Sign in"}
        {props.loggedin && (
          <span
            className={`icon ${
              props.loggedInSavedNews ? "icon_type_black" : ""
            }`}
          ></span>
        )}
      </button>
    </nav>
  );
}

export default Navigation;
