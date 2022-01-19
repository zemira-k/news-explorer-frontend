import React from "react";

function Card(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const loggedin = props.loggedin;
  const loggedInSavedNews = props.loggedInSavedNews;
  const cardSaveButtonClassName = `${
    loggedInSavedNews
      ? "card__save card__save_type_delete"
      : // : props.card.owner && loggedin
      loggedin && props.card.saved === "true"
      ? "card__save card__save_type_saved"
      : "card__save"
  }`;

  function dateConvert(date) {
    const myDate = date.split("T")[0];
    const day = myDate.split("-")[2];
    const month = months[parseInt(myDate.split("-")[1]) - 1];
    const year = myDate.split("-")[0];
    return `${month}  ${day}, ${year}`;
  }

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
      <img
        className="card__image"
        src={loggedInSavedNews ? props.card.image : props.card.urlToImage}
        alt="image1"
      />
      {loggedInSavedNews ? (
        <span className="card__image_title">{props.card.keyword}</span>
      ) : (
        ""
      )}

      {loggedInSavedNews ? (
        <a
          className="card__description"
          href={props.card.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <time className="card__date">{dateConvert(props.card.date)}</time>
          <h3 className="card__title">{props.card.title}</h3>
          <p className="card__subtitle">{props.card.text}</p>
          <p className="card__name">{props.card.source}</p>
        </a>
      ) : (
        <a
          className="card__description"
          href={props.card.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <time className="card__date">
            {dateConvert(props.card.publishedAt)}
          </time>
          <h3 className="card__title">{props.card.title}</h3>
          <p className="card__subtitle">{props.card.description}</p>
          <p className="card__name">{props.card.source.name}</p>
        </a>
      )}
    </article>
  );
}
export default Card;
