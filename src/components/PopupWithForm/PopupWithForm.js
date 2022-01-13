function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen ? "popup__opened" : ""}`}
      onClick={props.onOverlayClick}
    >
      <div className="popup__form" onClick={props.onModalClick}>
        <button
          onClick={props.onClose}
          aria-label="popup__close"
          className="popup__close"
          type="button"
          id="btnClose"
        ></button>
        <form onSubmit={props.onSubmit} className="form" name={props.name}>
          <h2 className="form__header">{props.header}</h2>
          <fieldset className="form__set">
            {props.children}
            <button
              aria-label="submit"
              className="form__button"
              type="submit"
              value={props.buttonTitle}
            >
              {props.buttonTitle}
            </button>
            <h3 className="form__footer">
              or{" "}
              <a
                className="form__link"
                href="#signup"
                onClick={
                  props.name === "login"
                    ? props.onRegisterClick
                    : props.onLoginClick
                }
              >
                {props.footer}
              </a>
            </h3>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
