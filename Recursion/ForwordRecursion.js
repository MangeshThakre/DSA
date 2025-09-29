

function frowordRecursion(n){
    if(n>0){
        console.log("frowordRecursion: ", n )
        frowordRecursion(n-1)
    }
}

let n= 3
frowordRecursion(n)


// o/p
// frowordRecursion:  3
// frowordRecursion:  2
// frowordRecursion:  1