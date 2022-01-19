import React, { useState } from "react";

function Search(props) {
  const [keyWord, setKeyWord] = useState("");

  function handleSearchClick(e) {
    e.preventDefault();
    props.onSearchClick(keyWord);
  }
  return (
    <div className="search">
      <h1 className="search__title">What's going on in the world?</h1>
      <h2 className="search__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      <div className="search__container">
        <input
          type="text"
          className="search__input"
          placeholder="Enter topic"
          onChange={(e) => setKeyWord(e.target.value)}
        ></input>
        <button
          type="submit"
          className="search__button"
          onClick={handleSearchClick}
        >
          search
        </button>
      </div>
    </div>
  );
}

export default Search;
