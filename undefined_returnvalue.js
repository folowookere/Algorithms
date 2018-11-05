/* The function will change the global sum variable but the 
returned value of the function is undefined */

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

var sum = 0;

function addFive() {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();