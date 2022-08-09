import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  const handleChangeName = (evt) => setName(evt.target.value);
  const handleChangeDescription = (evt) => setDescription(evt.target.value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile-editor"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__container">
        <input
          type="text"
          value={name || ""}
          name="name"
          className="form__item form__item_input_name"
          required
          minLength="2"
          maxLength="40"
          id="name-input"
          placeholder="Введите свое имя"
          onChange={handleChangeName}
        />
        <span className="form__input-error name-input-error"></span>
        <input
          type="text"
          value={description || ""}
          name="info"
          className="form__item form__item_input_job"
          required
          minLength="2"
          maxLength="200"
          id="job-input"
          placeholder="О себе"
          onChange={handleChangeDescription}
        />
        <span className="form__input-error job-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
