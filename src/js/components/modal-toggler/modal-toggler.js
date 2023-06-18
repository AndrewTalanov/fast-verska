
const buttonFeedback = document.getElementById('button-feedback');
const closeModal = document.querySelector('.close-button');

const wrapperForm = document.querySelector('.form-shadow');
const activeModalClass = 'active-modal';

const toggleModal = (wrapperForm, activeClass, ) => {
    const html = document.querySelector('html');

    wrapperForm.classList.toggle(activeClass);
    wrapperForm.classList.contains(activeModalClass) ? html.style.overflowY = 'hidden' : html.style.overflowY = 'scroll';
}

buttonFeedback.addEventListener('click', () => toggleModal(wrapperForm, activeModalClass));
closeModal.addEventListener('click', () => toggleModal(wrapperForm, activeModalClass));
wrapperForm.addEventListener('click', () => toggleModal(wrapperForm, activeModalClass));
