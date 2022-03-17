// The Unknown Type

let userInput: unknown; // <-- this is better type than eny
let userName: string;

userInput = 5;
userInput = "User";

if (typeof userInput === "string") {
  userName = userInput;
}

// The Never Type
// set never to never return anything. for cases such this one, when app is crashed or infinite loop
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("An error occurred!", 500);
