import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList(props) {
  const [count, setCount] = useState(3);
  const [buttonActive, setButtonActive] = useState(true);

  function handleClick() {
    if (count < props.cards.length) {
      setCount(count + 3);
    } else {
      setButtonActive(false);
    }
  }

  return (
    <div className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <div className="cards">
        {props.cards.slice(0, count).map((cardEl, i) => (
          <NewsCard
            key={i}
            card={cardEl}
            onSaveCardClick={props.onSaveCardClick}
            loggedin={props.loggedin}
          />
        ))}
      </div>
      <button
        onClick={handleClick}
        className={`search-results__button ${
          buttonActive ? "" : "search-results__button_type_not-active"
        }`}
        type="submit"
      >
        Show more
      </button>
    </div>
  );
}

export default NewsCardList;
