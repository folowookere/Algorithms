function confirmEnding(str, target) {
 	var check = str.length - target.length;
 	if (str.substr(check) === target) {
 		return true;
 	}
 	else {
 		return false;
 	}
}

confirmEnding("Bastian", "n");