/* Інкапсуляція


function User(name, age) {
    this.name = name;
    //   this.age = age;
    let userAge = age;

    this.say = function () {
        console.log(`Name user: ${this.name}, year: ${userAge}`);
    };

    this.getAge = function () {
        return userAge;
    };

    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('ERROR!!!!');
        }
    };
}
let ivan = new User('Ivan', 25);
console.log(ivan.name);
console.log(ivan.userAge);
console.log(ivan.getAge());

ivan.getAge(30);
console.log(ivan.getAge());

ivan.say();
*/

//Модуль
/*let number = 1;

(function () {
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}()); //  <===визов анонімної функції

console.log(number);

let user = (function () {
    let privat = function () {
        console.log('I am privat');
    };
    return {
        syaHello: function () {
            console.log('Hello');
        }
    };
}());

console.log(user);
console.log(user.syaHello());
*/

// Третій метод

let user = (function () {
    let privat = function () {
        console.log('I am privat');
    };
    let syaHello = function () {
        console.log('Hello');
    };
    return {
        syaHello: syaHello
    };
}());

console.log(user);
console.log(user.syaHello());