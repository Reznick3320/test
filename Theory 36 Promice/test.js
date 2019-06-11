let drink = 1, 
    clickShot = document.getElementById('shot');

function shoot(arrow) {
    
    let promise = new Promise(function (resolve, reject) {
        clickShot.addEventListener('click', function () {
            console.log('Вы сделали выстрел...');
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        });
       /* setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 1000)
        */
    }); 
    return promise;

};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? bueDeer(): giveMoney();
}

function bueDeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам заплатили');
}

function loose() {
    console.log('Вы проиграли');
}

shoot({})
    .then(mark => console.log('Вы попали в цель!'))
    .then(win)
    .catch(loose)