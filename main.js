const card1 = document.querySelector("#card-desing");
const card2 = document.querySelector("#card-support");

const cardpop = document.querySelector("#cardone");
const cardpop2 = document.querySelector("#card-two");
const closebtn = document.querySelector("#close-btn");
const closebtn2 = document.querySelector("#close-btn2");

closebtn.addEventListener("click", closePopups);
closebtn2.addEventListener("click", closePopups2);
card1.addEventListener("click", mifuncion);
card2.addEventListener("click", cardopo2);

function cardopo2(){
    cardpop2.classList.remove("inactive");
    cardpop2.classList.add("active");
}
function closePopups2(){
    cardpop2.classList.remove("active");
    cardpop2.classList.add("inactive");
}
function mifuncion(){
    cardpop.classList.remove("inactive");
    cardpop.classList.add("active");
}
function closePopups(){
    cardpop.classList.remove("active");
    cardpop.classList.add("inactive");
}
