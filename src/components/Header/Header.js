import Search from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function Header(props) {
  return (
    <header
      className={`header ${props.loggedInSavedNews ? "header_type_white" : ""}`}
    >
      <div
        className={`header__container ${
          props.loggedInSavedNews ? "header__container_type_black" : ""
        }`}
      >
        <div className="header__logo">NewsExplorer</div>
        <Navigation
          onLoginClick={props.onLoginClick}
          onLogoutClick={props.onLogoutClick}
          onHomeClick={props.onHomeClick}
          onSavedArticlesClick={props.onSavedArticlesClick}
          loggedin={props.loggedin}
          loggedInSavedNews={props.loggedInSavedNews}
          userName={props.userName}
        />
      </div>
      {props.loggedInSavedNews ? (
        <SavedNewsHeader userName={props.userName} counter={props.counter} />
      ) : (
        <Search onSearchClick={props.onSearchClick} />
      )}
    </header>
  );
}

export default Header;
