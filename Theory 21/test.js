"use strict";

/*
window.addEventListener('DOMContentLoader', function() {
    let box = document.querySelector('.box');
    box.addEventListener('touchstart', function (e) {
        e.preventDefault();
        console.log('Red box: Touch start!');
    });
});
*/

/*

let name = prompt('Enter your name', ''),
    pass = prompt('Enter password: ', '');

let reg = /n/ig;

console.log(name.match(reg));           // метод match

console.log(reg.test(name));            // метод test

console.log(pass.replace(/./g , "*"));          // метод replace
console.log('2020-25-15'.replace(/-/g, ":"));

*/

let ans = prompt('Enter number:', ''),
    text = 'My name is R2D2';

let reg = /\d/g; // клас пошуку цифр

//let reg = /\w/g; // клас пошуку букв

//let reg = /\s/g; // клас пошуку пробілів

console.log(ans.match(reg));
console.log(text.match(/\w\d\w\d/i));