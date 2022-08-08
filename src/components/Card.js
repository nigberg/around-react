function Card({ card, onClick }) {
  function handleClick() {
    onClick(card);
  }
  return (
    <article className="card">
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className="card__image"
      />
      <div className="card__caption">
        <h2 className="card__description">{card.name}</h2>
        <div className="card__likes">
          <button type="button" className="card__like-button"></button>
          <span className="card__likes-count">{card.likes.length}</span>
        </div>
        <button type="button" className="card__delete-button"></button>
      </div>
    </article>
  );
}
export default Card;
