function findElement(arr, func) {
  //filter through array and creates a new one with elements that passed the test
  var num = arr.filter(func);

  //checks if there are any numbers that passed truth test
  if (num.length > 1) {

  //return value that returned true
  return num[0];
}
  //if none passed then return undefined per instructions
  return undefined;
 }

/* test values
findElement([1, 2, 3, 4], num => num % 2 === 0);
*/