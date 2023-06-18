const wrapperPopup = document.querySelector('.popup-shadow');
const activePopupClass = 'popup-active';

wrapperPopup.addEventListener('click', () => toggleModal(wrapperPopup, activePopupClass));