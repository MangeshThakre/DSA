function pattern(){
    
    for(let i=1; i<6; i++){     // creating colomn 
        let row = ""
        let count = 0
        for(let j=5; j>=i; j--){  // crating row
            count += 1
            row += count 
        }
        console.log(row)
    }
    
}


// pattern()

function pattern(n){
    
    for(let i=1; i<n; i++){     // creating column
        let row = ""
        for(let j=1; j<= (n-i) ; j++){  // crating row
            row +=  j
        }
        console.log(row)
    }
    
}


pattern(6)