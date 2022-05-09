import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import MenuPopup from "../MenuPopup/MenuPopup";
import * as NewsApi from "../../utils/NewsApi";
import * as MainApi from "../../utils/MainApi";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInSavedNews, setLoggedInSavedNews] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [preloadOpen, setPreloadOpen] = useState(false);
  const [nothingFoundOpen, setNothingFoundOpen] = useState(false);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards") || "[]"),
  );
  const [messege, setMessege] = useState(false);
  const [homeActive, setHomeActive] = useState(true);
  const [keyWord, setKeyWord] = useState("");
  const [emailConflict, setEmailConflict] = useState(false);
  // if logged in get user info
  React.useEffect(() => {
    if (token) {
      MainApi.getUserInfo(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setLoggedIn(false);
    }
  }, [token]);
  function handleSavedArticlesClick() {
    MainApi.getAllArticles(token)
      .then((res) => {
        setSavedNews(res);
        setLoggedInSavedNews(true);
        setHomeActive(false);
        closeAllPopups();
        history.push("/saved-news");
      })
      .catch((err) => console.log(err));
  }
  function handleHomeClick() {
    setLoggedInSavedNews(false);
    setHomeActive(true);
    closeAllPopups();
  }
  function handleSearchClick(keyWord) {
    setKeyWord(keyWord);
    setPreloadOpen(true);
    setSearchOpen(false);
    setNothingFoundOpen(false);
    NewsApi.getInitialCards(keyWord)
      .then((cards) => {
        setPreloadOpen(false);
        if (cards.articles.length > 0) {
          setCards(cards.articles);
          cards.articles.map((obj) => (obj.saved = "false"));
          setSearchOpen(true);
          localStorage.setItem("cards", JSON.stringify(cards));
        } else {
          setNothingFoundOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setPreloadOpen(false);
        setSearchOpen(false);
        setMessege(true);
        setIsInfoTooltipPopupOpen(true);
      });
  }
  function deleteArticle(card) {
    MainApi.deleteArticle(card._id, token)
      .then(() => {
        setSavedNews((state) => state.filter((c) => c._id !== card._id));
        setCards((state) =>
          state.map((c) =>
            c.title === card.title ? { ...c, saved: "false" } : c,
          ),
        );
      })
      .catch((err) => console.log(err));
  }
  function handleSaveCardClick(card) {
    if (loggedIn) {
      if (card.owner === currentUser._id || card.saved === "true") {
        if (card.saved === "true") {
          const found = savedNews.find((c) => c.title === card.title);
          deleteArticle(found);
        } else {
          deleteArticle(card);
        }
      } else {
        MainApi.addArticle(token, card, keyWord)
          .then((newCard) => {
            setSavedNews([...savedNews, newCard.data]);
            setCards((state) =>
              state.map((c) =>
                c.title === card.title ? { ...c, saved: "true" } : c,
              ),
            );
          })
          .catch((err) => console.log(err));
      }
    } else {
      setIsLoginPopupOpen(true);
    }
  }
  // login, register, logout
  function handleSubmitLogin({ values, resetForm }) {
    MainApi.login(values.email, values.password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setLoggedIn(true);
          closeAllPopups();
          history.push("/");
          resetForm();
        }
      })
      .catch((err) => console.log(err));
  }
  // function handleSubmitRegister({ email, password, name }) {
  function handleSubmitRegister({ values, resetForm }) {
    MainApi.register(values.email, values.password, values.username)
      .then((res) => {
        if (res) {
          handleInfo();
          console.log("Register success");
          resetForm();
          setEmailConflict(false);
        }
      })
      .catch((err) => {
        if (err.includes(409)) {
          setEmailConflict(true);
        }
        console.log("Something went wrong.");
      });
  }
  function handleLogoutClick() {
    console.log("logged out");
    localStorage.removeItem("jwt");
    history.push("/");
    setLoggedIn(false);
    setLoggedInSavedNews(false);
    setSearchOpen(false);
    setHomeActive(true);
    closeAllPopups();
  }
  // open or close popups
  function handleLoginClick() {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  }
  function handleRegisterClick() {
    closeAllPopups();
    setIsRegisterPopupOpen(true);
  }
  function handleInfo() {
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
    setMessege(false);
  }
  // close popup by esc or overlay click
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
        <Switch>
          <Route exact path="/">
            <Header
              onLoginClick={handleLoginClick}
              onLogoutClick={handleLogoutClick}
              onHomeClick={handleHomeClick}
              onSavedArticlesClick={handleSavedArticlesClick}
              onSearchClick={handleSearchClick}
              onMenuClick={handleMenuClick}
              homeActive={homeActive}
              loggedin={loggedIn}
              loggedInSavedNews={loggedInSavedNews}
            />
            <Main
              onSaveCardClick={handleSaveCardClick}
              loggedin={loggedIn}
              searchOpen={searchOpen}
              cards={cards}
              preloadOpen={preloadOpen}
              nothingFoundOpen={nothingFoundOpen}
            />
          </Route>
          <ProtectedRoute
            exact
            path="/saved-news"
            loggedInSavedNews={loggedInSavedNews}
          >
            <SavedNewsHeader
              onLoginClick={handleLoginClick}
              onLogoutClick={handleLogoutClick}
              onHomeClick={handleHomeClick}
              onSavedArticlesClick={handleSavedArticlesClick}
              onMenuClick={handleMenuClick}
              homeActive={homeActive}
              loggedin={loggedIn}
              loggedInSavedNews={loggedInSavedNews}
              savedNews={savedNews}
            />
            <SavedNews
              onSaveCardClick={handleSaveCardClick}
              loggedin={loggedIn}
              loggedInSavedNews={loggedInSavedNews}
              savedNews={savedNews}
            />
          </ProtectedRoute>
        </Switch>
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
          onSubmit={handleSubmitRegister}
          emailConflict={emailConflict}
        />
        <InfoTooltip
          onOverlayClick={closeByOverlayClick}
          onModalClick={onModalClick}
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          onLoginClick={handleLoginClick}
          messege={messege}
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
          userName={currentUser.name}
          onLogoutClick={handleLogoutClick}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
