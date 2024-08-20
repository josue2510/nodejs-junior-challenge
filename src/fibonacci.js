/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function recursiveFibonacci(limit, fibArr = [0, 1]) {
  if (limit <= 0) return [];
  if (limit === 1) return [0];
  if (fibArr.length >= limit) return fibArr.slice(0, limit);

  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);

  return recursiveFibonacci(limit, fibArr);
}

function fibonacci(limit) { 
  return recursiveFibonacci(limit);
}

module.exports = fibonacci;
