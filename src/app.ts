const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log("Clicked " + message);
}
// Comment
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "you are welcome!"));
}
