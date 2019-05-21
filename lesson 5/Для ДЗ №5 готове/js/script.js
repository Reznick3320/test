"use strict";

//1) Сортувати меню
//2) Поміняти картінку на задньому плані
//3) Видалити рекламу

let sortMenu = document.querySelectorAll('.menu .menu-item'),
    bg = document.createElement('body'),
    removeAdv = document.getElementsByClassName('.column .adv');

bg.id = "newBg";
document.body = bg;

//bg.style.background('../img/apple_true.jpg');
