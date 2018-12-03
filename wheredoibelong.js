// Return index of num variable

function getIndexToIns(arr, num) {

  // Insert num into arr array
  arr.push(num);
  
  // Sort array into ascending order
  arr.sort(function(a, b) {
    return a - b;
  });
  
  // Find my place in this sorted array.
  // Return index of num in new sorted array
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);