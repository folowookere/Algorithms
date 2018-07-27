function sumPrimes(num) {

  var array = []; 
  var i; 
  var j;
  var primes = [];
  for (i = 2; i <= num; i++) { 
    if (isPrime(i)) { 
      primes.push(i); 
    }
  }
      function isPrime (num) {
    for (j = 2; j < num; j++) { 
      if (num % j === 0) {
        return false;
      }
    } 
  return true;
      }
     return primes.reduce(function(a,b) {
      return a+b;
    });
}

sumPrimes(10);