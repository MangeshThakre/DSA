function power (b, n){
if(n==0){
    return 1
} else{
    return power(b, n-1)*b
}   
}
let b =2
let n = 3
const result = power(b, n)
console.log(result) 