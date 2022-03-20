"use strict";
let id = "123";
const button = document.querySelector("button");
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log("Clicked " + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "you are welcome!"));
}
