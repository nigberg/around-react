import pencil from "../images/edit.svg";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(console.log);

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user-info">
          <button
            type="button"
            style={{ backgroundImage: `url(${userAvatar})` }}
            className="profile__avatar"
            onClick={props.onEditAvatarClick}
          >
            <img
              alt="edit"
              className="profile__avatar-edit-image"
              src={pencil}
            />
          </button>
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            onClick={props.onEditProfileClick}
            className="profile__edit-button"
          ></button>
          <p className="profile__occupation">{userDescription}</p>
        </div>
        <button
          type="button"
          onClick={props.onAddPlaceClick}
          className="profile__add-button"
        ></button>
      </section>
      <section className="gallery">
        {cards.map((item) => (
          <Card key={item._id} card={item} onClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}
export default Main;
