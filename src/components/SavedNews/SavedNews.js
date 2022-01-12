import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className="cards">
      {props.cards.map((cardEl) =>
        cardEl.owner === currentUser.name ? (
          <NewsCard
            key={cardEl._id}
            card={cardEl}
            onSaveCardClick={props.onSaveCardClick}
            loggedin={props.loggedin}
            loggedInSavedNews={props.loggedInSavedNews}
          />
        ) : (
          ""
        ),
      )}
    </div>
  );
}

export default SavedNews;
