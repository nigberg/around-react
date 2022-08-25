import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const onNameChange = (evt) => {
    setName(evt.target.value);
  };

  const onLinkChange = (evt) => {
    setLink(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace({ name, link });
    setName("");
    setLink("");
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="add"
      title="Add new place"
      onSubmit={handleSubmit}
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
          value={name}
          onChange={onNameChange}
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
          value={link}
          onChange={onLinkChange}
        />
        <span className="form__input-error add-popup__input-link-error"></span>
      </div>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
