function Navigation(props) {
  return (
    <nav className="header__nav">
      <button
        onClick={props.onMenuClick}
        className={`header__nav_menu ${
          props.loggedInSavedNews ? "header__nav_menu_type_black" : ""
        }`}
      />
      <a
        className={`header__nav_link ${
          props.homeActive ? "header__nav_link_type_active" : ""
        } ${props.loggedInSavedNews ? "header__nav_link_type_black" : ""}`}
        href="#home"
        onClick={props.onHomeClick}
      >
        Home
      </a>
      {props.loggedin && (
        <a
          className={`header__nav_link ${
            props.homeActive ? "" : "header__nav_link_type_active-black"
          } ${props.loggedInSavedNews ? "header__nav_link_type_black" : ""}`}
          href="#Saved articles"
          onClick={props.onSavedArticlesClick}
        >
          Saved articles
        </a>
      )}
      <button
        type="submit"
        className={`header__nav_button ${
          props.loggedInSavedNews ? "header__nav_button_type_black" : ""
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
    </nav>
  );
}

export default Navigation;
