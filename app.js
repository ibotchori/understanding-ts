// The Unknown Type
var userInput; // <-- this is better type than eny
var userName;
userInput = 5;
userInput = "User";
if (typeof userInput === "string") {
    userName = userInput;
}
// The Never Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
