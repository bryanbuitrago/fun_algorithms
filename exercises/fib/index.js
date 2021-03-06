// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
 // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Recursive solution
function fib(n) {
  if(n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// function fib(n) {
//   let result = [0,1];
//   for (let num = 2; num <= n; num++) {
//     const a = result[num - 1];
//     const b = result[num - 2];
//     result.push(a + b);
//   }
//   return result[result.length -1];
// }

module.exports = fib;
