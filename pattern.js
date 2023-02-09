const pattern1 = function(n){
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
      }
      console.log();
    }
  }
  pattern1(5);
  ///////////////////////////////////////////////////////////////
  const pattern2 = function(n){
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= n-i-1; j++) {
        process.stdout.write("*");
      }
      console.log();
    }
  }
  pattern2(5);
/////////////////////////////////////////////////////////////////////
  const pattern3 = function(n){
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j}`);
      }
      console.log();
    }
  }
   pattern3(5);
  //////////////////////////////////////////////////////////////////////////////
  const patten4 = function(n){
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n-i+1; j++) {
        process.stdout.write(`${j}`);
      }
      console.log();
    }
  }
  patten4(5);
  ////////////////////////////////////////////////////////////////////////////////
  const pattern5 = function(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 1; j <= n-i+1; j++) {
        process.stdout.write(" ");
      }
      for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
      }
      if (i) {
        for (let j = 0; j < i; j++) {
          process.stdout.write("*");
        } 
      }
      console.log();
    }
  }
  pattern5(5);
  //////////////////////////////////////////////////////////////////////////////
  const pattern6 = function(n){
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        process.stdout.write(" ");
      }
      for (let k = 0; k < n-i-1; k++) {
        process.stdout.write("*");
      }
      for (let l = 0; l <= n-i-1; l++) {
        process.stdout.write(`*`);
      }
      console.log();
    }
  }
  pattern6(5);