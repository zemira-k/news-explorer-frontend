import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main(props) {
  return (
    <>
      {props.preloadOpen && <Preloader />}
      {props.nothingFoundOpen && <NothingFound />}
      {props.searchOpen && (
        <NewsCardList
          cards={props.cards}
          onSaveCardClick={props.onSaveCardClick}
          loggedin={props.loggedin}
          messege={props.messege}
        />
      )}
      <About />
    </>
  );
}

export default Main;
