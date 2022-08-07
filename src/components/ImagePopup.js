function ImagePopup() {
  return (
    <div className="popup picture-popup">
      <div className="picture-popup__image-container popup__content">
        <button
          type="button"
          className="picture-popup__close-button popup__close-button">
        </button>
        <img src="#" alt="" className="picture-popup__image" />
        <h2 className="picture-popup__caption"> </h2>
      </div>
    </div>
  );
}
export default ImagePopup;
