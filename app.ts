function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  // if(typeof num1 !== 'number' || typeof num2 !== 'number' ) {
  //   throw new Error('Incorrect input!')
  // }

  let result = num1 + num2;
  if (showResult) {
    console.log(phrase + result)
  } else {
    return result
  }
}



const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: "

add(number1, number2, printResult, resultPhrase);

