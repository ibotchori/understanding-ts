let id = "123";
const button = document.querySelector("button");

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = "John";
  console.log("Clicked " + message);
}
// Comment
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "you are welcome!"));
}
