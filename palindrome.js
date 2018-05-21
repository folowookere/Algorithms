
function palindrome(str) {
      //I think removes characters and convert to lower case
  var strLowerCase = str.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  //converts to array, reverses then joins back together
 if (strLowerCase == strLowerCase.split('').reverse().join('')) {
     return true;
} else {
  return false;
}
}



palindrome("not a palindrone");
