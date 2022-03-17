// The Unknown Type

let userInput: unknown; // <-- this is better type than eny
let userName: string;

userInput = 5;
userInput = "User";

if (typeof userInput === "string") {
  userName = userInput;
}
