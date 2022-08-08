import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useContext } from "react";
import Card from "./Card.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const {
    name: userName,
    avatar: userAvatar,
    about: userDescription,
  } = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img
              className="profile__image"
              src={userAvatar}
              alt="Аватар пользователя"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-area">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                aria-label="Edit"
                className="profile__edit-btn"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Add"
          className="profile__add-btn"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
