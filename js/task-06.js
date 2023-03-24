const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event){
const total = event.currentTarget.value.length;
if(Number(inputEl.dataset.length) !== total) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
}
inputEl.classList.add('valid');
inputEl.classList.remove('invalid');
};

