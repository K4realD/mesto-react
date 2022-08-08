import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const name = useRef();
  const link = useRef();

  const handleChangeName = (evt) => {
    name.current.value = evt.target.value;
  };

  const handleChangeLink = (evt) => {
    link.current.value = evt.target.value;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace({ name: name.current.value, link: link.current.value });
  };

  useEffect(() => {
    name.current.value = "";
    link.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="card-editor"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__container">
        <input
          ref={name}
          onChange={handleChangeName}
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
          ref={link}
          onChange={handleChangeLink}
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
  );
}

export default AddPlacePopup;
