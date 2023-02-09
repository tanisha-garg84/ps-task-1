function printPrimeNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      let isPrime = true;         
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;  
          break;
        }
      }
      if (isPrime) {
        console.log(i);  
      }
    }
  }
  printPrimeNumbers(1, 100);

  