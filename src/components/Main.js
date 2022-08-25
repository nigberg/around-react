import pencil from "../images/edit.svg";
import { useState, useEffect, useContext } from "react";
import { api } from "../utils/api";
import Card from "./Card";
import { currentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(currentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

  function handleCardDelete(card){
    api.deleteCard(card._id).then(() => {      
      setCards(cards.filter(item => item._id !== card._id));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user-info">
          <button
            type="button"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            className="profile__avatar"
            onClick={props.onEditAvatarClick}
          >
            <img
              alt="edit"
              className="profile__avatar-edit-image"
              src={pencil}
            />
          </button>
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            onClick={props.onEditProfileClick}
            className="profile__edit-button"
          ></button>
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <button
          type="button"
          onClick={props.onAddPlaceClick}
          className="profile__add-button"
        ></button>
      </section>
      <section className="gallery">
        {cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
