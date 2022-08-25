function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.name}-popup ${
        props.isOpen ? "popup_visible" : ""
      }`}
    >
      <div className={`${props.name}-popup__container popup__content`}>
        <button
          type="button"
          className={`${props.name}-popup__close-button popup__close-button`}
          onClick={props.onClose}
        />
        <h2 className={`${props.name}-popup__caption`}>{props.title}</h2>
        <form action="#" name={props.name} className="form add-popup__form" onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className="form__submit-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
