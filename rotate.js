let number = 12345;
let count=0;
let div=1;
let mul=1;
let k =4;
let counter = number;
while(counter){
    counter = parseInt(counter/10)
    count++;
}


for (let i = 1; i <=count; i++) {
    
    if(i<=k){
        div*=10;
    }else{
        mul*=10;
    }
}


let q = parseInt(number/div); 
console.log(q);
let r=number%div;
console.log(r);

let result = r*mul+q;

console.log(result);