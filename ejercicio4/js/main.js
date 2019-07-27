'use strict';
// Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador.

const main = document.querySelector('.main');
const pago = 128;
const precioPorPersona = (128-2)/9;
const ana = precioPorPersona + 2;

console.log(`Cada una de nosotras ha de pagar ${precioPorPersona} pero Ana deberá pagar ${ana}.`);

main.innerHTML = `
<p>Cada una de nosotras ha de pagar ${precioPorPersona} pero Ana deberá pagar ${ana}.</p>
`;