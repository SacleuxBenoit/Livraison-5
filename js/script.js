"use strict";

const buttonPrevious = document.querySelector(".btn1");
const buttonNext = document.querySelector(".btn2");
const li = document.querySelectorAll("li");
let positionNext = 0;

function nextImage(){
    positionNext++;
    if (positionNext == li.length){
        positionNext = 0;
    }
   
    for(let i = 0; i < li.length; i++){
    li[i].classList.remove("active");
    }
    
    li[positionNext].classList.add("active"); 
}

function previousImage(){
    
    if (positionNext > 0){
        positionNext--;
    }
    for(let i = 0; i < li.length; i++){
    li[i].classList.remove("active");
    }
    
    li[positionNext].classList.add("active"); 
}

buttonNext.addEventListener("click", nextImage);
buttonPrevious.addEventListener("click", previousImage);
setInterval(function(){
    nextImage();
},5000)


