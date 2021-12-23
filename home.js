const upper = document.querySelector(".upper");
const lower = document.querySelector(".lower");
const numberElement = document.querySelector(".number");
let number = 0;


function add(){
    number += 1; 
    numberElement.innerHTML = number;
}

function lowerNum(){
    number -= 1; 
    numberElement.innerHTML = number;
}