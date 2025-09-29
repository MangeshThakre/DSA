//Direct Recursion - Indirect recursion

// Ex-1
console.log("Ex-1")
function treeRecursion(n){
if (n>0){
    console.log("treeRecursion: ",n)
    treeRecursion(n-1)
    treeRecursion(n-1)
}
}

let n = 3;
// treeRecursion(n)

//  o/p
// treeRecursion:  3
// treeRecursion:  2
// treeRecursion:  1
// treeRecursion:  1
// treeRecursion:  2
// treeRecursion:  1
// treeRecursion:  1



//Ex-2
console.log("Ex-2")
// function treeRecurs  ion(m){
    if (m>0){
        treeRecursion(m-1)
        treeRecursion(m-1)
        console.log("treeRecursion: ",m)
    }
    }
    
    let m = 3;
    treeRecursion(m)

    // o/p
// treeRecursion:  1
// treeRecursion:  1
// treeRecursion:  2
// treeRecursion:  1
// treeRecursion:  1
// treeRecursion:  2
// treeRecursion:  3


// Ex-3
console.log("Ex-3")
function treeRecursion(p){
    if (p>0){
        treeRecursion(p-1)
        console.log("treeRecursion: ",p)
        treeRecursion(p-1)
    }
    }
    
    let p = 3;
    treeRecursion(p)

