let toggel = document.querySelector(".toggel");
let close = document.querySelector("nav .close");
let nav = document.querySelector("nav ");

console.log(toggel);
console.log(close);
toggel.onclick = function(){
nav.classList.add("open");
}
close.onclick = function(){
    nav.classList.remove("open");
}