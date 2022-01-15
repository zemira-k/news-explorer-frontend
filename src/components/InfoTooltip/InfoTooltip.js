import React from "react";

function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_type_info ${props.isOpen ? "popup__opened" : ""}`}
      onClick={props.onOverlayClick}
    >
      <div className="popup__info-tool-tip" onClick={props.onModalClick}>
        <button
          onClick={props.onClose}
          aria-label="popup__close"
          className={`popup__close`}
          type="button"
          id="btnClose"
        ></button>
        <div className="info" name="info">
          <h2 className="info__text">Registration successfully completed!</h2>
          <a className="info__link" href="#signin" onClick={props.onLoginClick}>
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
