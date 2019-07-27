'use strict';

const main = document.querySelector('.main');
const age = document.querySelector('.age');
const result = document.querySelector('.hoursWritten');
const hoursPerYear = 24*365;

function calculate(event){

    const inputAge = event.currentTarget.value;
    const hours = inputAge * hoursPerYear;

    console.log(`
    Has vivido un total de ${hours} horas.>
    `);

    result.innerHTML = hours;
}

age.addEventListener('keyup', calculate)

