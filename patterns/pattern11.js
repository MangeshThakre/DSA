function pattern(n){
    
 for (let i=1; i<n; i++){
     row = ""
     for(let j=0; j<i; j++){
         row += (j+i)%2  
     }
     console.log(row)
 }

}

pattern(5)
