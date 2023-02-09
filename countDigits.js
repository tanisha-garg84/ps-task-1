 const countDigits = function(number) {
    let count = 0;
    while (number > 0) {
      count++;
      number = parseInt(number / 10);
    }
    console.log(count);
  }
  countDigits(1234567890);