function fabonacciGenerator(n){
    var outPut=[0,1];
   
    if(n===1){
        outPut=[0];
    } 
    else if(n===2){
        outPut=[0,1];
    }
    else {
        
        for(let i=2; i<n; i++){
            outPut.push(outPut[i-2]+outPut[i-1]);
           
        }
    }
    return outPut;
}


console.log(fabonacciGenerator(20));