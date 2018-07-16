//Solution for Falsy Bouncer freecodecamp algorithm

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  newArray = arr.filter(function(myArgument) {


  	return (Boolean(myArgument) === true);
  })
  return newArray;
}

console.log(
bouncer([7, "ate", "", false, 9])
);