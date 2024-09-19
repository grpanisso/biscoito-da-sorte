const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const biscoito = document.getElementById('imgbiscoitodasorte');
const button = document.querySelector('button');

biscoito.addEventListener('click', () => {
    screen1.classList.add('hide'); 
    screen2.classList.remove('hide'); 
});

button.addEventListener('click', () => {
    screen1.classList.remove('hide'); 
    screen2.classList.add('hide');
});