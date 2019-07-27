'use strict';

const userName = document.querySelector('.input');
const result = document.querySelector('.text');

function login(event){
    const value = event.currentTarget.value;
    if(value === "Eva" || value === "eva" || value === "Coco" || value === "coco"){
        result.classList.remove('error');
        result.classList.remove('hidden');
        result.classList.add('resultado');
        result.innerHTML = `Acceso Permitido, bienvenida ${value}.`;
    }
    else if(value === ""){       
        result.innerHTML = `Usuario no registrado, acceso denegado.`;
        result.classList.remove('hidden');
        result.classList.add('error');
    }
    else{
        result.classList.remove('hidden');
    }
}

userName.addEventListener('keyup', login);
