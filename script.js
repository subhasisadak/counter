let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');

let incrementNumber = () => {
    let numberElement = document.querySelector('.number');
    let number = Number(numberElement.innerText);
    number += 1;
    numberElement.innerText = number;
}

let decrementNumber = () => {
    let numberElement = document.querySelector('.number');
    let number = Number(numberElement.innerText);
    number -= 1;
    numberElement.innerText = number;
}

increment.addEventListener("click", incrementNumber);

decrement.addEventListener("click", decrementNumber);
