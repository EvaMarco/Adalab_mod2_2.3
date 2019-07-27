'use strict';

const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const input = document.querySelector('.inputUrl');
const name = document.querySelector('.inputName');

const DEFAULT_AVATAR = 'http://placehold.it/300x300';

function result(event){
    const userUrl = event.currentTarget.value;
    userAvatar.src = (userUrl || DEFAULT_AVATAR);
    
    //avatar.setAttribute(“src”, userAvatar || defaultAvatar);
}
input.addEventListener('keyup', result);
name.addEventListener('keyup', result);



