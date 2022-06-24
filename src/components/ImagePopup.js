function ImagePopup(props) {
    return (
        <div className={`popup popup_type_${props.card.name} ${props.card.isOpen && "popup_opened"}`}>
        <div className="popup__image-container">
          <button
            type="button"
            aria-label="Close-image"
            className="popup__close-btn popup__close-btn_image"
            onClick={props.onClose}
          ></button>
          <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <p className="popup__image-title">{props.card.name}</p>
        </div>
      </div>

    )
}

export default ImagePopup;