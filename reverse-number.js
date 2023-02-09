function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
      reversed = (reversed * 10) + (num % 10);
      num = parseInt(num / 10);
    }
    console.log(reversed);
  }
  reverseNumber(987654);