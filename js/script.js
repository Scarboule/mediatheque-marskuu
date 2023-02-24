let form = document.querySelector('#subscribe-form');
let successMessage = document.querySelector('#success-message');
let affiliateLabel = document.querySelector('#affiliate-label');
let arrow = document.querySelector('#arrow');
let affiliateInput = document.querySelector('#affiliate-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.remove('invisible');
})

affiliateLabel.addEventListener('click', (e) => {
    if (affiliateInput.style.opacity) {
        affiliateInput.style.opacity = null;
        affiliateInput.style.zIndex = null;
        affiliateLabel.style.translate = null;
        arrow.style.rotate = null;
    } else {
        affiliateInput.style.opacity = '1';
        affiliateInput.style.zIndex = '1';
        affiliateLabel.style.translate = '1rem 0';
        arrow.style.rotate = '90deg';
    }
})