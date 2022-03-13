import Search from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">NewsExplorer</div>
        <Navigation
          onLoginClick={props.onLoginClick}
          onLogoutClick={props.onLogoutClick}
          onHomeClick={props.onHomeClick}
          onMenuClick={props.onMenuClick}
          onSavedArticlesClick={props.onSavedArticlesClick}
          loggedin={props.loggedin}
          loggedInSavedNews={props.loggedInSavedNews}
          homeActive={props.homeActive}
        />
      </div>
      <Search onSearchClick={props.onSearchClick} />
    </header>
  );
}

export default Header;
