function truncateString(str, num) {

	if(str.length > num) {
		if (num <= 3){
			str = str.slice(0, num) + "...";
		}
    else {
      if (num > 3) {
        str = str.slice(0, num) + "...";
      }
    }
	}


  return str;
}
