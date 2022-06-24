function Card(props) {
    const handleCardClick = () => props.onCardClick(props.card)
    return(
            <li className="element">
              <img src={props.link} alt={props.name} className="element__image" onClick={handleCardClick} />
              <div className="element__info">
                <h3 className="element__title">{props.name}</h3>
                <div className="element__like-container">
                  <button
                    type="button"
                    aria-label="Like"
                    className="element__like-btn"
                  ></button>
                  <span className="element__like-num">{props.likes.length}</span>
                </div>
              </div>
              <button
                type="button"
                aria-label="delete"
                className="element__delete-btn"
              ></button>
            </li>
    )
}

export default Card