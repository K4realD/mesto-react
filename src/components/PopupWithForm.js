function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
        <div className="popup__container">
          <button
            type="button"
            aria-label="Close"
            className="popup__close-btn"
            onClick={props.onClose}
          ></button>
          <form className="form form_profile" name={`${props.name}`} noValidate>
            <h2 className="form__heading">{props.title}</h2>
             {props.children}
              <button type="submit" aria-label="Save" className="form__submit-btn">
                {props.buttonText}
              </button>
          </form>
        </div>
      </div>

    )
}
export default PopupWithForm