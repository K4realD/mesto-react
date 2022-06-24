import { api } from "../utils/constants.js";
import { useState, useEffect } from "react";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then((res) => {
      setUserName(res[0].name);
      setUserAvatar(res[0].avatar);
      setUserDescription(res[0].about);
      setCards(res[1].reverse());
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
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
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Add"
          className="profile__add-btn"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
      <ul className="elements__list">
         {cards.map((card) => (
          <Card name={card.name} link={card.link} likes={card.likes} card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </ul>
      </section>
    </main>
  );
}

export default Main;
