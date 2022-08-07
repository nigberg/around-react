import pencil from "../images/edit.svg";

function Main(props) {
    
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user-info">
          <button type="button" className="profile__avatar" onClick={props.onEditAvatarClick}>
            <img
              alt="edit"
              className="profile__avatar-edit-image"
              src={pencil}
            />
          </button>
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button type="button" onClick={props.onEditProfileClick} className="profile__edit-button"></button>
          <p className="profile__occupation">Explorer</p>
        </div>
        <button type="button" onClick={props.onAddPlaceClick} className="profile__add-button"></button>
      </section>
      <section className="gallery">
        <template id="card">
          <article className="card">
            <img src="#" alt="" className="card__image" />
            <div className="card__caption">
              <h2 className="card__description"> </h2>
              <div className="card__likes">
                <button type="button" className="card__like-button"></button>
                <span className="card__likes-count"></span>
              </div>
              <button type="button" className="card__delete-button"></button>
            </div>
          </article>
        </template>
      </section>
    </main>
  );
}
export default Main;
