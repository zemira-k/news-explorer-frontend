import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isCardSaved = props.card.owner.includes(currentUser.name);
  const loggedin = props.loggedin;
  const loggedInSavedNews = props.loggedInSavedNews;

  const cardSaveButtonClassName = `${
    loggedInSavedNews
      ? "card__save card__save_type_delete"
      : isCardSaved && loggedin
      ? "card__save card__save_type_saved"
      : "card__save"
  }`;

  function handleSaveCardClick() {
    props.onSaveCardClick(props.card);
  }

  return (
    <article className="card">
      <button
        onClick={handleSaveCardClick}
        className={cardSaveButtonClassName}
      ></button>
      {loggedin && loggedInSavedNews ? (
        <span className="card__note">Remove from saved</span>
      ) : loggedin ? (
        ""
      ) : (
        <span className="card__note">Sign in to save articles</span>
      )}
      <img className="card__image" src={props.card.image} alt="image1" />
      {loggedInSavedNews ? (
        <span className="card__image_title">Yellowstone</span>
      ) : (
        ""
      )}

      <div className="card__description">
        <time className="card__date">{props.card.date}</time>
        <h3 className="card__title">{props.card.title}</h3>
        <p className="card__subtitle">{props.card.subtitle}</p>
        <p className="card__name">{props.card.name}</p>
      </div>
    </article>
  );
}
export default Card;
