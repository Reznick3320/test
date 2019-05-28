"use strict";

//let timeId = setTimeout(seyHello, 3000);
//clearInterval(timeId);

/*
function seyHello() {
    console.log('Hello world');
}

let timeId = setInterval(seyHello, 0);
*/

/*
let timeId = setTimeout(function log() {
    console.log('Hello world');         //Рекурсія
    setTimeout(log, 2000);
});
*/

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let poz = 0;

    let id = setInterval(frame, 10);
    function frame(){
        if (poz == 300){
            clearInterval();
        } else {
            poz++;
            elem.style.top = poz + 'px';
            elem.style.left = poz + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});