import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews(props) {
  return (
    <div className="cards">
      {props.savedNews.map((cardEl) => (
        <NewsCard
          key={cardEl._id}
          card={cardEl}
          onSaveCardClick={props.onSaveCardClick}
          loggedin={props.loggedin}
          loggedInSavedNews={props.loggedInSavedNews}
        />
      ))}
    </div>
  );
}

export default SavedNews;
