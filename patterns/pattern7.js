function pattern(n){
    
    for(let i=0; i<n; i++){     // creating colomn 
        let row = ""
        for(let j=0; j< (n-i-1) ; j++){  // crating row
            row +=  " " 
        }
        for (let k = 0; k < 2*i+1; k++ ){
        row += "*"
        }
           console.log(row) 
        }
}


pattern(8)


//        *
//       ***
//      *****
//     *******
//    *********
//   ***********
//  *************
// ***************