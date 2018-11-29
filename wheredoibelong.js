function getIndexToIns(arr, num) {

  // Insert num into arr array
  arr.push(num);
  // Sort array into ascending order
  arr.sort(function(a, b){return a-b});
  // Return index of num

  // Find my place in this sorted array.
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);