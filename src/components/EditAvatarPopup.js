import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const inputRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm name="edit-avatar" title="Обновить&nbsp;аватар" buttonText="Сохранить" onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} children=
      {
        <>
        <label className="popup__input-label" htmlFor="title-input">
            <input className="popup__input popup__input_type_avatar" ref={inputRef} id="avatar-input" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
            <span className="avatar-input-error popup__input-error"></span>
          </label>
        </>
      }
    />
  )
}

export default EditAvatarPopup;