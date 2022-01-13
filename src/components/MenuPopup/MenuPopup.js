import React from "react";

function MenuPopup(props) {
  return (
    <div
      className={`popup popup_type_menu ${props.isOpen ? "popup__opened" : ""}`}
      onClick={props.onOverlayClick}
    >
      <div className="popup__menu" onClick={props.onModalClick}>
        <div className="menu__logo">
          NewsExplorer
          <button
            onClick={props.onClose}
            aria-label="popup__close"
            className={"popup__close popup__close_type_menu"}
            type="button"
            id="btnClose"
          ></button>
        </div>
        <div className="menu" name="menu">
          <a className={"menu__link"} href="#home" onClick={props.onHomeClick}>
            Home
          </a>
          {props.loggedin && (
            <a
              className={"menu__link"}
              href="#Saved articles"
              onClick={props.onSavedArticlesClick}
            >
              Saved articles
            </a>
          )}
          <button
            type="submit"
            className={"menu__button"}
            onClick={props.loggedin ? props.onLogoutClick : props.onLoginClick}
          >
            {props.loggedin ? props.userName : "Sign in"}
            {props.loggedin && <span className="icon icon_type_menu"></span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuPopup;
