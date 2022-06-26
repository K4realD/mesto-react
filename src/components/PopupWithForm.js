function PopupWithForm({name, isOpen, onClose, title, children, buttonText}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
        <div className="popup__container">
          <button
            type="button"
            aria-label="Close"
            className="popup__close-btn"
            onClick={onClose}
          ></button>
          <form className="form form_profile" name={name} noValidate>
            <h2 className="form__heading">{title}</h2>
             {children}
              <button type="submit" aria-label="Save" className="form__submit-btn">
                {buttonText}
              </button>
          </form>
        </div>
      </div>

    )
}
export default PopupWithForm