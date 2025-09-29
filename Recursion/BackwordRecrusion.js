
function BackwordRecursion(n){
    if(n>0){
        BackwordRecursion(n-1)
        console.log("BackwordRecursion: ", n )
    }
}
let n= 3
BackwordRecursion(n)

// o/p
// BackwordRecursion:  1
// BackwordRecursion:  2
// BackwordRecursion:  3