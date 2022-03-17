function add(n1: number, n2: number) {
  return n1 + n2;
}

// Void return type, means this function does not return anything
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(2, 45));
