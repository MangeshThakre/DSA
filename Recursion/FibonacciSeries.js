
// ex-1

function fibonacciSeries(n){
    if(n>1){
        fibonacciSeries(n-1)
        fibonacci = pre_2+pre_1
        pre_2 =pre_1
        pre_1 =fibonacci
        console.log(fibonacci)
}
}
let n = 6
let pre_1 =1
let pre_2 =0 
let fibonacci = 0
// console.log(0)
// console.log(1)
// fibonacciSeries(n);

// ex-2

function fibonacciSeriesE2(n){
    if(n==1||n==0){
        return n
    }else{
        return(fibonacciSeriesE2(n-1) + fibonacciSeriesE2(n-2))
    }
}

const i =6
let m=0
while(m<i){
    console.log( fibonacciSeriesE2(m))
    m++
}

