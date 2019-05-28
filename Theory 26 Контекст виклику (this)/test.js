/*
function showThis (a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return this.a + this.b;
       // return a + b;
    }
    console.log(sum());
}
showThis(4, 5);
*/
//1) Простий физов функції


/*
let obj = {
    a: 10,
    b: 20,
    sum: function () {
        console.log(this);
        function shoout() {
            console.log(this);
        }
        shoout();
    }
};

obj.sum();
*/
//2) Метод об'єка: this = самому об'єкту
//3) Конструктор (new): this = новий створений об'єкт
/*
let user = {
    name: 'John'
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
console.log(sayName.call(user, ' Switn'));
console.log(sayName.apply(user, [' Stack']));

function count (num) {
    return this * num;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(10));
*/
//4) Указання конкретного контексту - call, apply, bind

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this); //Виводиться сама кнопка як в HTML
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
})