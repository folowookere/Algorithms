function titleCase(str) {
	//first set string to lowercase no matter what gets inputted
	str = str.toLowerCase();
	// declare new empty array 
	var titleCase = [];
	// split array into individual words
	str = str.split(" ");
	// send array through capitalized function declared below
	titleCase = str.map(capitalized);
	// join them back together by word
	titleCase = titleCase.join(" ");
	// finally return array
  	return titleCase;
}

function capitalized(a) {
	// Get first character of every individual word in array
	var firstLetter = a.charAt(0);
	// Set every character to uppercase
	var firstLetterUppercase = firstLetter.toUpperCase();
	// replace original letter with uppercase one
	a = a.replace(firstLetter, firstLetterUppercase);
	// return final result
	return a;

}

//test if function works
console.log(titleCase("I'm a little tea pot"));