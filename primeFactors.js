const primeFactors = function(n){
    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        let flag = true;
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            flag = false;
            break;
          }
        }
        if (flag) {
          console.log(i);
        }
      }
    }
  };
   console.log(primeFactors(1440));