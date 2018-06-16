//Two solutions to find largest number in each subarray

// function largestOfFour(arr) {

//   arr.forEach(function(arr1){
//   	return arr1.sort(function(a,b){
//   		return a-b;
//   	});
//   });

//   arr.forEach(function(arr1){
//   	return arr1.splice(0, 3);
//   });

//   arr = arr.reduce(function(arr1,arr2){
//   	return arr1.concat(arr2);
//   });

//   return arr;
// }


function largestOfFour(arr) {
	var answerArr = [];
	arr.forEach(function(inputArray) {
		answerArr.push(Math.max.apply(null, inputArray));
	});
	return answerArr;

}




console.log(
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
);