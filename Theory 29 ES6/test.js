
////////29//////////////////////
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show();
});




/////////////30////////////////

function callOrDouble (number, basis = 2) { //basis = 2 це ES6
   // basis = basis || 2; //   ES5
    console.log(number * basis);
}

callOrDouble(3, 5);
callOrDouble(6);

//////31 класи!!//////////

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }

    calkArea () {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);
console.log(square.calkArea());

////Sprad оператор розвороту /////

let video = ['youtube', 'vinevideo', 'rutube'],
    blogs = ['wordpress', 'livejurnal', 'bloger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let numbers = [2 ,3 ,4];

log(...numbers);