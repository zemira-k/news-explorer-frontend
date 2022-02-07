import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className="cards">
      {props.savedNews.map(
        (cardEl) =>
          cardEl.owner === currentUser._id && (
            <NewsCard
              key={cardEl._id}
              card={cardEl}
              onSaveCardClick={props.onSaveCardClick}
              loggedin={props.loggedin}
              loggedInSavedNews={props.loggedInSavedNews}
            />
          ),
      )}
    </div>
  );
}

export default SavedNews;
