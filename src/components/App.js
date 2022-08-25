import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { currentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  //Current user data fetch on mounting
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(console.log);
  }, []);

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

  function handleUpdateUser({ name, about }) {
    api
      .editProfile({ name, about })
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch(console.log);
  }

  function hanldeUpdateAvatar(avatarUrl) {
    api
      .setAvatar(avatarUrl)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch(console.log);
  }

  return (
    <div className="page">
      <currentUserContext.Provider value={currentUser}>
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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          name="confirm"
          title="Are you sure?"
          onClose={closeAllPopups}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={hanldeUpdateAvatar}
        />

        <ImagePopup
          isOpen={isCardPopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </currentUserContext.Provider>
    </div>
  );
}

export default App;
