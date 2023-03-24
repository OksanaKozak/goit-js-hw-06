const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

text.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', function () {
  text.style.fontSize = inputEl.value + 'px';
});
