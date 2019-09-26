"use strict";

const buttonPrevious = document.querySelector(".btn1");
const buttonNext = document.querySelector(".btn2");
const li = document.querySelectorAll("li");
let positionNext = 0;

function nextImage(){
    positionNext++;

    for(let i = 0; i < li.length; i++){
    li[i].classList.remove("active");
    }
}


