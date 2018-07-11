function frankenSplice(arr1, arr2, n) {
	var arr3 = arr2.slice();
  // It's alive. It's alive!
  arr3.splice(n,0,...arr1);
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);