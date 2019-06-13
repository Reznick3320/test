//localStorage.setItem("number", 1);

//console.log(localStorage.getItem("number"));

//localStorage.removeItem("number");

window.addEventListener('DOMContentLoaded', function () {
    let checkBox = document.getElementById('checky'),
        change = document.getElementById('submit');
        form = document.getElementsByTagName('form')[0];

    if (localStorage.getItem("isCheked") === "true") {
        checkBox.checked = true;
    }

    if (localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = "#ff4766";
    }

    checkBox.addEventListener('click', function () {
        localStorage.setItem("isCheked", true);
    });

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#ff4766";
    });

    let persone = {
        mane: "Alex",
        age: 25,
        tech: ["mobile", "notebook"]
    };
    let setializesPersone = JSON.stringify(persone);
    localStorage.setItem("Alex", setializesPersone);

    console.log(JSON.parse(localStorage.getItem("Alex")));

});