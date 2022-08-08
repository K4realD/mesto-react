import { useEffect, useState } from "react";
import { api } from "../utils/constants.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeletePlacePopupOpen, setDeletePlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isOpen: false });
  const [currentUser, setCurrentUser] = useState("");
  const [cards, setCards] = useState([]);

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfileOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleCardClick = (data) => setSelectedCard({ isOpen: true, ...data });

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfileOpen(false);
    setAddPlacePopupOpen(false);
    setDeletePlacePopupOpen(false);
    setSelectedCard({ isOpen: false });
  };

  const handleUpdateUser = (data) => {
    api.patchProfile(data).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  };

  const handleUpdateAvatar = (data) => {
    api.patchAvatar(data).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  };
  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() =>
        setCards((element) => element.filter((item) => item._id !== card._id))
      );
  };

  const handleAddPlaceSubmit = (card) => {
    api.postNewCard(card).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  };

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, initialCards]) => {
        setCurrentUser(user);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки первоначальных данных, ${err}`);
      });
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
          isOpen={isDeletePlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__container"></fieldset>
        </PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
