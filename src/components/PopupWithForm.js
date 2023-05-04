function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__exit-button" type="button" onClick={props.onClose}></button>
        <h2 className="popup__label">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;