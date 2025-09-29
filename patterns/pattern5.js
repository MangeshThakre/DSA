function pattern(){
    
    for(let i=1; i<6; i++){     // creating colomn 
        let row = ""
        for(let j=5; j>=i; j--){  // crating row
            row += "* "
        }
        console.log(row)
    }
    
}


pattern()

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 