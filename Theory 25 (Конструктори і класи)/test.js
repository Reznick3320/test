"use strict";
/*
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log('Hello ' + this.name);
    };

    User.prototype.exit = function (name) {
        console.log('User ' + this.name + ' out in home');
    }
}

let ivan = new User('ivan', 20),
    alex = new User('alex', 25);

console.log(ivan);
console.log(alex);

alex.exit();
*/
                /*!!!!!!!!!!!!!!1*/
                /* ECMA SCRIPT 6 */
                /*!!!!!!!!!!!!!!!*/
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.numan = true;
    }
    hello() {
        console.log(`'Hello!' ${this.name}`)
    }
    exit() {
        console.log(`User ${this.name} out in home`)
    }
}
let ivan = new User('Ivan', 20);
let alex = new User('Alex', 25);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();