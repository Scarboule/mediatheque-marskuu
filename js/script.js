let form = document.querySelector('#subscribe-form');
let successMessage = document.querySelector('#success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.remove('invisible');
})