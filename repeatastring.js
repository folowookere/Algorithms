//Repeating a string a specified number of times

function repeatStringNumTimes(str, num) {

    //declare empty string
	var string = "";
	
	//while loop, while num is greater than 0, append str to string variable and decrease by 1 each time
	while (num > 0) {
		string += str;
		num--;
	}

  return string;
}