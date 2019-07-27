'use strict';

const input = document.querySelector('.input');
const text = document.querySelector('.text');

function choose(event) {
    const number = parseInt(event.currentTarget.value);
    console.log('initial' + number);
    if (number === 0) {
        console.log('El número es 0');
        text.innerHTML = 'El número es 0';
        text.classList.add('resultado');
    }
    else if (number < 0) {
        console.log('El número es negativo');
        text.innerHTML = 'El número es negativo';
        text.classList.add('resultado');

    }
    else if (number + 2 > 13 && number + 2 <= 20) {
        console.log('El número más 2 es: mayor 13 pero menor o igual que 20');
        text.innerHTML = 'El número más 2 es: mayor 13 pero menor o igual que 20';
        text.classList.add('resultado');
    }
    else if (number > 20 && number < 50) {
        console.log('El número es mayor que 20 pero menor que 50');
        text.innerHTML = 'El número es mayor que 20 pero menor que 50';
        text.classList.add('resultado');
    } 
    else {
        console.log('el número no es 123123125')
        text.innerHTML = 'el número no es 123123125';
        text.classList.add('resultado');
    }
}

input.addEventListener('keyup', choose);