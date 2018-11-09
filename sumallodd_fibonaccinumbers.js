function sumFibs(num) {

  var num1 = 1, num2 = 1, num3 = 0
  var total = 2; // Getting first two numbers for our starting total
  for (var i = 0; num3 <= num; i++) {

    num3 = num2 + num1;
    num1 = num2;
    num2 = num3

     if (num3 % 2 !== 0 && num3 <= num) {
      total += num3;
    }
   
    console.log('Added' , num3, 'Total is' , total);
  }
  return total;
}

sumFibs(4);