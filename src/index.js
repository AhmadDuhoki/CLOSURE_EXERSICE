// Task 0:
// Create a closure that when called and passed a number
// sums the number with an inner variable and returns the sum
// it should always rememeber the summation.
// When called without an argument, it should return the last sum
function sum(startVal = 0) {
  let sum = startVal;
  return (x = 0) => (sum += x);
}

const ben10 = sum();
console.log(ben10(7));
console.log(ben10(5));
