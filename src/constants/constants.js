const profile = document.querySelector('.profile');
const popupEditProfile = document.getElementById('editProfile');
const profileEditTitle = document.getElementById('editProfileTitle');
const profileEditSubtitle = document.getElementById('editProfileSubtitle');
const buttonOpenEditProfilePopup = profile.querySelector('.profile__button');
const popupEdit = document.getElementById('edit');
const buttonOpenAddCardPopup = profile.querySelector('.profile__add-button');
const formAddCard = popupEdit.querySelector('.form');
const formEditProfile = popupEditProfile.querySelector('.form');
const popupEditAvatar = document.querySelector('#popupEditAvatar');
const buttonAvatarEdit = document.querySelector('.profile__content');
const formEditAvatar = popupEditAvatar.querySelector('.form');
const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save',
    inactiveButtonClass: 'form__save_inactive',
    inputErrorClass: 'form__input-error',
    errorClass: 'form__input-error_active'
  };

export { profile, popupEditProfile, profileEditTitle, profileEditSubtitle, buttonOpenEditProfilePopup,
    popupEdit, buttonOpenAddCardPopup, formAddCard, formEditProfile, buttonAvatarEdit, formEditAvatar, validationConfig
}