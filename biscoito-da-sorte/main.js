
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const biscoitoButton = document.getElementById('imgbiscoitodasorte');
const outroBiscoitoButton = document.querySelector('.screen2 button');


biscoitoButton.addEventListener('click', function() {
    screen1.classList.add('hide');  // Esconde screen1
    screen2.classList.remove('hide');  // Mostra screen2
});


outroBiscoitoButton.addEventListener('click', function() {
    screen2.classList.add('hide');  // Esconde screen2
    screen1.classList.remove('hide');  // Mostra screen1
});
