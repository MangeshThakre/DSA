


function factorial(n){
    if(n==1||n==0) return 1
    if(n<0) return "-negative no."
    RecursionFactorial(n)
    return f
}
function RecursionFactorial(n){
    if(n>1){
        RecursionFactorial(n-1);
        f = f*n;
    }
}



let f = 1;
const number = 3
const factorialNo= factorial(number)
console.log("factorial of ",number," : ", f)