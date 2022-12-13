const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
console.log (h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');//

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = '456';
console.log(document.createElement('img'));