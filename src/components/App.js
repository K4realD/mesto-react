import { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeletePlacePopupOpen, setDeletePlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isOpen: false });

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

  return (
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            name="profile-editor"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isEditProfileOpen}
            onClose={closeAllPopups}
          >
            <fieldset className="form__container">
              <input
                type="text"
                name="name"
                className="form__item form__item_input_name"
                required
                minLength="2"
                maxLength="40"
                id="name-input"
                placeholder="Введите свое имя"
              />
              <span className="form__input-error name-input-error"></span>
              <input
                type="text"
                name="info"
                className="form__item form__item_input_job"
                required
                minLength="2"
                maxLength="200"
                id="job-input"
                placeholder="О себе"
              />
              <span className="form__input-error job-input-error"></span>
            </fieldset>
          </PopupWithForm>

          <PopupWithForm
            name="card-editor"
            title="Новое место"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <fieldset className="form__container">
              <input
                type="text"
                name="title"
                placeholder="Название"
                className="form__item form__item_input_description"
                required
                minLength="2"
                maxLength="30"
                id="title-input"
              />
              <span className="form__input-error title-input-error"></span>
              <input
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                className="form__item form__item_input_link"
                required
                id="link-input"
              />
              <span className="form__input-error link-input-error"></span>
            </fieldset>
          </PopupWithForm>

        <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
          isOpen={isDeletePlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__container"></fieldset>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__container">
            <input
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              className="form__item form__item_input_link"
              required
              id="link-avatar-input"
            />
            <span className="form__input-error link-avatar-input-error"></span>
          </fieldset>
        </PopupWithForm>
      </div>
  );
}

export default App;
