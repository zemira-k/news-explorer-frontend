function SavedNewsHeader(props) {
  return (
    <div className="saved-news__container">
      <h4 className="saved-news__title">Saved articles</h4>
      <h2 className="saved-news__details">
        {props.userName}, you have {props.counter} saved articles
      </h2>
      <h3 className="saved-news__Keywords">
        By keywords: Nature, Yellowstone, and 2 other
      </h3>
    </div>
  );
}

export default SavedNewsHeader;
