import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNews from "../SavedNews/SavedNews";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main(props) {
  return (
    <>
      <Preloader />
      <NothingFound />
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
