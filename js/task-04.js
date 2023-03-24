let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');


buttonIncrement.addEventListener('click', () => {
  counterValue +=1;
  span.textContent = counterValue;
  });

buttonDecrement.addEventListener('click', () => {
    counterValue -=1;
    span.textContent = counterValue;
    });