import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

let isEditProfilePopupOpen = false;
let isAddPlacePopupOpen = false;
let isEditAvatarPopupOpen = false;
let isCardPopupOpen = false;
let isConfirmPopupOpen = false;

const handleEditAvatarClick = () => {  
  console.log("ava clicked "+isEditAvatarPopupOpen);
  isEditAvatarPopupOpen = true;
  console.log("ava clicked "+isEditAvatarPopupOpen);
};

const handleEditProfileClick = () => {
  isEditProfilePopupOpen = true;
};

const handleAddPlaceClick = () => {
  isAddPlacePopupOpen = true;
};

const handleCardClick = () => {
  isCardPopupOpen = true;
};

const closeAllPopups = () => {
  isEditProfilePopupOpen = false;
  isAddPlacePopupOpen = false;
  isEditAvatarPopupOpen = false;
  isCardPopupOpen = false;
  isConfirmPopupOpen = false;
  console.log("close button clicked");
};

const handleConfirmClick = () => {
  isConfirmPopupOpen = true;
};

function App() {
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
      <ImagePopup />
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
        isOpen={isConfirmPopupOpen}
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
      <ImagePopup isOpen={isCardPopupOpen} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
