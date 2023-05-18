import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const inputTitleRef = React.useRef(null);
  const inputUrlRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: inputTitleRef.current.value,
      link: inputUrlRef.current.value
    });
  }

  return (
    <PopupWithForm name="add" title="Новое&nbsp;место" buttonText="Создать" onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} children=
      {
        <>
        <label className="popup__input-label" htmlFor="title-input">
            <input className="popup__input popup__input_type_title" ref={inputTitleRef} id="title-input" type="text" name="title" placeholder="Название" required minLength="2" maxLength="30"/>
            <span className="title-input-error popup__input-error"></span>
          </label>
          <label className="popup__input-label" htmlFor="url-input">
            <input className="popup__input popup__input_type_url" ref={inputUrlRef} id="url-input" type="url" name="url" placeholder="Ссылка на картинку" required/>
            <span className="url-input-error popup__input-error"></span>
          </label>
        </>
      }
    />
  )
}

export default AddPlacePopup;