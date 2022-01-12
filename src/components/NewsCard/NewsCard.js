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
      <img className="card__image" src={props.card.image} alt="image1" />
      <div className="card__description">
        <p className="card__date">{props.card.date}</p>
        <h3 className="card__title">{props.card.title}</h3>
        <h4 className="card__subtitle">{props.card.subtitle}</h4>
        <p className="card__name">{props.card.name}</p>
      </div>
    </article>
  );
}
export default Card;
