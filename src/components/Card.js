import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardLike, onCardClick, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwned = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardDeleteButtonClassname = `element__delete-btn ${
    isOwned ? "element__delete-btn_visible" : "element__delete-btn_hidden"
  }`;
  const cardLikeButtonClassName = `element__like-btn ${
    isLiked ? "element__like-btn_active" : ""
  }`;

  const handleCardClick = () => onCardClick(card);
  const handleLikeClick = () => onCardLike(card);
  const handleDeleteClick = () => onCardDelete(card);

  return (
    <li className="element">
      <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleCardClick}
      />
      <div className="element__info">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like-container">
          <button
            type="button"
            aria-label="Like"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="element__like-num">{card.likes.length}</span>
        </div>
      </div>
      <button
        type="button"
        aria-label="delete"
        className={cardDeleteButtonClassname}
        onClick={handleDeleteClick}
      ></button>
    </li>
  );
}

export default Card;
