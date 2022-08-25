import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarUrl = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar(avatarUrl.current.value);
    avatarUrl.current.value = "";
  };
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="avatar-change"
      title="New profile picture"
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          type="url"
          required
          ref={avatarUrl}
          className="form__input"
          id="avatar-change-popup__input-link"
          name="link"
          placeholder="Enter new avatar link"
        />
        <span className="form__input-error avatar-change-popup__input-link-error"></span>
      </div>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
