"use strict";

//1) Сортувати меню
//2) Поміняти картінку на задньому плані
//3) Видалити рекламу

let bg = document.getElementsByTagName('body'),
    mune = document.getElementsByClassName('menu');
mune.style.backgroundColor = 'red';
bg.style.backgroundImage = 'none';