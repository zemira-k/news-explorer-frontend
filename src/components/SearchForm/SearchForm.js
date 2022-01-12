function Search(props) {
  return (
    <div className="header__search">
      <h1 className="header__search__title">What's going on in the world?</h1>
      <h2 className="header__search__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      <div className="header__search__container">
        <input
          type="text"
          className="header__search__input"
          placeholder="Enter topic"
        ></input>
        <button
          type="submit"
          className="header__search__button"
          onClick={props.onSearchClick}
        >
          search
        </button>
      </div>
    </div>
  );
}

export default Search;
