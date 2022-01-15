function Search(props) {
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
        ></input>
        <button
          type="submit"
          className="search__button"
          onClick={props.onSearchClick}
        >
          search
        </button>
      </div>
    </div>
  );
}

export default Search;
