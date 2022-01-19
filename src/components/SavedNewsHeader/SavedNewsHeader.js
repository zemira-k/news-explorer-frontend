import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Navigation from "../Navigation/Navigation";

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const savedNews = props.savedNews.filter((c) => c.owner === currentUser._id);
  const keyWords = savedNews.map((data) => data.keyword + ", ");
  const uniqueChars = [...new Set(keyWords)];

  return (
    <header className="header header_type_white">
      <div className="header__container header__container_type_black">
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
      <div className="saved-news__container">
        <h4 className="saved-news__title">Saved articles</h4>
        <h2 className="saved-news__details">
          {currentUser.name}, you have {savedNews.length} saved articles
        </h2>
        <h3 className="saved-news__Keywords">
          {`${
            uniqueChars.length > 3
              ? `By keywords: ${uniqueChars.slice(0, 2)}  and ${
                  uniqueChars.length - 2
                } other..`
              : `By keywords: ${uniqueChars.slice(0, 3)}`
          }`}
        </h3>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
