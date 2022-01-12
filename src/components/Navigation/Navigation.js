function Navigation(props) {
  return (
    <div className="header__nav">
      <button
        className={`header__nav__menu ${
          props.loggedInSavedNews ? "header__nav__menu_type_black" : ""
        }`}
      />
      <a
        className={`header__nav__link ${
          props.loggedInSavedNews ? "header__nav__link_type_black" : ""
        }`}
        href="#home"
        onClick={props.onHomeClick}
      >
        Home
      </a>
      {props.loggedin && (
        <a
          className={`header__nav__link ${
            props.loggedInSavedNews ? "header__nav__link_type_black" : ""
          }`}
          href="#Saved articles"
          onClick={props.onSavedArticlesClick}
        >
          Saved articles
        </a>
      )}
      <button
        type="submit"
        className={`header__nav__button ${
          props.loggedInSavedNews ? "header__nav__button_type_black" : ""
        }`}
        onClick={props.loggedin ? props.onLogoutClick : props.onLoginClick}
      >
        {props.loggedin ? props.userName : "Sign in"}
        {props.loggedin && (
          <span
            className={`icon ${
              props.loggedInSavedNews ? "icon_type_black" : ""
            }`}
          ></span>
        )}
      </button>
    </div>
  );
}

export default Navigation;
