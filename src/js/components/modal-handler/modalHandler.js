const modalForm = document.querySelector('.contact-form');
const request = document.getElementById('request');
const fields = document.querySelectorAll('.contact-form__field > *:nth-child(2)');
const loader = document.getElementById('loader');
const classErrorField = 'error-field';

const handlerForm = (e) => {
    e.preventDefault();

    const formData = new FormData(modalForm);

    const objectData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    let requestMessage = '';

    for (const key in objectData) {

        const element = objectData[key];
        const index = Object.keys(objectData).indexOf(key);

        if (!element) {
            fields[index].classList.add(classErrorField);
        } else {
            fields[index].classList.remove(classErrorField);
        }
    }

    if (objectData.email && objectData.name && objectData.message) {
        const activeModalClass = 'active-modal';
        const url = 'юрл';

        openLoader();
        try {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(objectData)
            }).then(response => {
                if (response.ok) {
                    closeLoader();
                    toggleModal(wrapperForm, activeModalClass);
                    toggleModal(wrapperPopup, activePopupClass)
                }
            });
        } catch (error) {
            console.log(error);
        }

    } else {
        requestMessage = 'Не все поля заполнены!';
    }

    request.innerHTML = requestMessage;
}

const openLoader = () => {
    loader.style.display = 'block';
}

const closeLoader = () => {
    loader.style.display = 'none';
}

modalForm.addEventListener('submit', (e) => handlerForm(e));