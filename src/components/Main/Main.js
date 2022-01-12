import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNews from "../SavedNews/SavedNews";

function Main(props) {
  return (
    <>
      {props.searchOpen ? (
        <NewsCardList
          cards={props.cards}
          onSaveCardClick={props.onSaveCardClick}
          loggedin={props.loggedin}
        />
      ) : (
        ""
      )}
      {props.loggedInSavedNews ? (
        <SavedNews
          cards={props.cards}
          onSaveCardClick={props.onSaveCardClick}
          loggedin={props.loggedin}
          loggedInSavedNews={props.loggedInSavedNews}
        />
      ) : (
        <About />
      )}
    </>
  );
}

export default Main;
