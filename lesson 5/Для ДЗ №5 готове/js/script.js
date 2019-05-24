"use strict";

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    adv = document.getElementsByClassName('adv')[0],
    menuItemLi = document.createElement('li'),
    titleT = document.getElementById('title'),
    forAplle = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);            //1) Сортувати меню

adv.remove();           //2) Видалити рекламу

document.body.style.background = "url('img/apple_true.jpg')";           //3) Поміняти картінку на задньому плані

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый елемент';
menu.appendChild(menuItemLi);

titleT.textContent = 'Мы продаем только подлиную технику Apple';            //4) Заменить текст

let selectorForAplle = prompt('Ваше отношение к техники Aplle?');           //5)Prompt
forAplle.textContent = selectorForAplle;