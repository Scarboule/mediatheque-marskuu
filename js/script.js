let form = document.querySelector('#subscribe-form');
let successMessage = document.querySelector('#success-message');
let affiliateLabel = document.querySelector('#affiliate-label');
let arrow = document.querySelector('#arrow');
let affiliateInput = document.querySelector('#affiliate-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.classList.remove('invisible');
})
console.log(arrow.style.rotate)
affiliateLabel.addEventListener('click', (e) => {
    affiliateLabel.classList.toggle('ml-0');
    affiliateLabel.classList.toggle('ml-4');
    if (arrow.style.rotate) arrow.style.rotate = null;
    else arrow.style.rotate = '90deg';
    if (affiliateInput.style.opacity) {
        affiliateInput.style.opacity = null;
        affiliateInput.style.zIndex = null;
    } else {
        affiliateInput.style.opacity = '1';
        affiliateInput.style.zIndex = '1';
    }
})