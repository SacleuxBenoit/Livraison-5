"use strict";

const buttonPrevious = document.querySelector(".btn1");
const buttonNext = document.querySelector(".btn2");
const li = document.querySelector("li");
let positionNext = 0;

function nextImage(){
    positionNext++;
    li.classList.remove("active");
}




buttonPrevious.addEventListener("click", () => alert("ok"));
buttonNext.addEventListener("click", () => alert("ok"));
