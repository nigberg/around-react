import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setIsCardPopupOpen(true);
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsCardPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="page">
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditProfileClick={handleEditProfileClick}
        onEditAvatarClick={handleEditAvatarClick}
        onAddPlaceClick={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name="add"
        title="Add new place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__field">
          <input
            type="text"
            minLength="1"
            maxLength="30"
            required
            className="form__input"
            id="add-popup__input-description"
            name="name"
            placeholder="Enter place name"
          />
          <span className="form__input-error add-popup__input-description-error"></span>
        </div>
        <div className="form__field">
          <input
            type="url"
            required
            className="form__input"
            id="add-popup__input-link"
            name="link"
            placeholder="Enter picture link"
          />
          <span className="form__input-error add-popup__input-link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="edit"
        title="Edit your profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__field">
          <input
            type="text"
            minLength="2"
            maxLength="40"
            required
            className="form__input"
            id="edit-popup__input-name"
            name="name"
            placeholder="Enter your name"
          />
          <span className="form__input-error edit-popup__input-name-error"></span>
        </div>
        <div className="form__field">
          <input
            type="text"
            minLength="2"
            maxLength="200"
            required
            className="form__input"
            id="edit-popup__input-about"
            name="about"
            placeholder="About you"
          />
          <span className="form__input-error edit-popup__input-about-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="confirm"
        title="Are you sure?"
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="avatar-change"
        title="New profile picture"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__field">
          <input
            type="url"
            required
            className="form__input"
            id="avatar-change-popup__input-link"
            name="link"
            placeholder="Enter new avatar link"
          />
          <span className="form__input-error avatar-change-popup__input-link-error"></span>
        </div>
      </PopupWithForm>
      <ImagePopup
        isOpen={isCardPopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
