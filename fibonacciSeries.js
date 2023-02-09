const fibonacci = function(number){
  a=0;
  b=1;
  console.log(a);
console.log(b);
  for (let i = 2; i < number; i++) {
    sum = a+b;
    console.log(sum);
    a=b;
    b=sum;
  }
}
fibonacci(12);