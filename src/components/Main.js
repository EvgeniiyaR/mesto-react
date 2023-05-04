import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards([...initialCards]);
    })
    .catch((err) => console.log(`Возникла ошибка: ${err}`));
  }, [setUserName, setUserDescription, setUserAvatar, setCards]);

  return (
    <main>
      <section className="profile">
        <div className="profile__view">
          <button className="profile__avatar-container" type="button" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt={userName}/>
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Карточки путешествий">
        <ul className="elements__list">
          {cards.map(({ _id, ...props }) => (
            <li className="elements__element" key={_id}>
              <Card card={props} onCardClick={onCardClick}/>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;