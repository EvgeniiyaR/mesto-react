function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
      <button className="elements__basket-button" type="button"></button>
      <h2 className="elements__title">{props.card.name}</h2>
      <div className="elements__like">
        <button className="elements__like-button" type="button"></button>
        <p className="elements__like-count">{props.card.likes.length}</p>
      </div>
    </>
  )
}

export default Card;