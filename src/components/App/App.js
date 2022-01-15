import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import cardList from "../../utils/consts";
import MenuPopup from "../MenuPopup/MenuPopup";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInSavedNews, setLoggedInSavedNews] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [homeActive, setHomeActive] = useState(true);

  function handleSubmitLogin() {
    setLoggedIn(true);
    setUserName(currentUser.name);
    closeAllPopups();
    setSavedNews(cards.filter((data) => data.owner === currentUser.name));
  }

  function handleSavedArticlesClick() {
    setSearchOpen(false);
    setLoggedInSavedNews(true);
    setHomeActive(false);
    closeAllPopups();
  }

  function handleHomeClick() {
    setLoggedInSavedNews(false);
    setSearchOpen(false);
    setHomeActive(true);
    closeAllPopups();
  }

  function handleSearchClick() {
    setSearchOpen(true);
  }

  function handleSaveCardClick(card) {
    if (loggedIn) {
      if (card.owner === currentUser.name) {
        card.owner = "default";
      } else {
        card.owner = currentUser.name;
      }
    }
    setCards((state) => state.map((c) => (c._id === card._id ? card : c)));
    setSavedNews(cards.filter((data) => data.owner === currentUser.name));
  }

  // // handles to open and close popups
  function handleLoginClick() {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  }

  function handleLogoutClick() {
    setLoggedIn(false);
    setLoggedInSavedNews(false);
    setSearchOpen(false);
    setHomeActive(true);
    closeAllPopups();
  }

  function handleRegisterClick() {
    closeAllPopups();
    setIsRegisterPopupOpen(true);
  }

  function handleInfoClick() {
    closeAllPopups();
    setIsInfoTooltipPopupOpen(true);
  }

  function handleMenuClick() {
    closeAllPopups();
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    setIsMenuPopupOpen(false);
  }

  React.useEffect(() => {
    setCurrentUser({ name: "Elise" });
  }, []);

  React.useEffect(() => {
    setCards(cardList);
  }, []);

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  const closeByOverlayClick = (e) => {
    closeAllPopups();
    e.stopPropagation();
  };

  const onModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          onLoginClick={handleLoginClick}
          onLogoutClick={handleLogoutClick}
          onHomeClick={handleHomeClick}
          onSavedArticlesClick={handleSavedArticlesClick}
          onSearchClick={handleSearchClick}
          onMenuClick={handleMenuClick}
          homeActive={homeActive}
          loggedin={loggedIn}
          userName={userName}
          loggedInSavedNews={loggedInSavedNews}
          counter={savedNews.length}
        />
        <Main
          onSaveCardClick={handleSaveCardClick}
          loggedin={loggedIn}
          loggedInSavedNews={loggedInSavedNews}
          searchOpen={searchOpen}
          cards={cards}
        />
        <Footer
          onHomeClick={handleHomeClick}
          homeActive={homeActive}
          loggedInSavedNews={loggedInSavedNews}
        />
        <Login
          onOverlayClick={closeByOverlayClick}
          onModalClick={onModalClick}
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onSubmitLogin={handleSubmitLogin}
          onRegisterClick={handleRegisterClick}
        />
        <Register
          onOverlayClick={closeByOverlayClick}
          onModalClick={onModalClick}
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onLoginClick={handleLoginClick}
          onSubmit={handleInfoClick}
        />
        <InfoTooltip
          onOverlayClick={closeByOverlayClick}
          onModalClick={onModalClick}
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          onLoginClick={handleLoginClick}
        />
        <MenuPopup
          onOverlayClick={closeByOverlayClick}
          onSavedArticlesClick={handleSavedArticlesClick}
          onModalClick={onModalClick}
          isOpen={isMenuPopupOpen}
          onClose={closeAllPopups}
          onHomeClick={handleHomeClick}
          onLoginClick={handleLoginClick}
          loggedin={loggedIn}
          userName={userName}
          onLogoutClick={handleLogoutClick}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
