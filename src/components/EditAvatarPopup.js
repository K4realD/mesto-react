import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const ref = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar({ avatar: ref.current.value });
  };

  useEffect(() => {
    ref.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__container">
        <input
          ref={ref}
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
  );
}

export default EditAvatarPopup;
