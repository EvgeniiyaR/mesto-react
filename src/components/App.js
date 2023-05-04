import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={setSelectedCard}/>
        <Footer />
      </div>
      <PopupWithForm name="edit" title="Редактировать&nbsp;профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children=
        {
          <>
            <label className="popup__input-label" htmlFor="author-input">
              <input className="popup__input popup__input_type_name" id="author-input" type="text" name="author" placeholder="Имя" required minLength="2" maxLength="40"/>
              <span className="author-input-error popup__input-error"></span>
            </label>
            <label className="popup__input-label" htmlFor="about-input">
              <input className="popup__input popup__input_type_about" id="about-input" type="text" name="about" placeholder="О себе" required minLength="2" maxLength="200"/>
              <span className="about-input-error popup__input-error"></span>
            </label>
          </>
        }
      />
      <PopupWithForm name="add" title="Новое&nbsp;место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children=
        {
          <>
           <label className="popup__input-label" htmlFor="title-input">
              <input className="popup__input popup__input_type_title" id="title-input" type="text" name="title" placeholder="Название" required minLength="2" maxLength="30"/>
              <span className="title-input-error popup__input-error"></span>
            </label>
            <label className="popup__input-label" htmlFor="url-input">
              <input className="popup__input popup__input_type_url" id="url-input" type="url" name="url" placeholder="Ссылка на картинку" required/>
              <span className="url-input-error popup__input-error"></span>
            </label>
          </>
        }
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <PopupWithForm name="delete" title="Вы&nbsp;уверены?" buttonText="Да"/>
      <PopupWithForm name="edit-avatar" title="Обновить&nbsp;аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children=
        {
          <>
           <label className="popup__input-label" htmlFor="title-input">
              <input className="popup__input popup__input_type_avatar" id="avatar-input" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
              <span className="avatar-input-error popup__input-error"></span>
            </label>
          </>
        }
      />
    </div>
  );
}

export default App;
