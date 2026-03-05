function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
if(year%4===0){
    if(year%100===0){
        if(year%400===0){
            alert(year+" is a leap year");
        }
    } else {
        alert(year +" is not a leap year");
    }
    

}
else {
    alert(year+" is not a leap year");
}

    

/**************Don't change the code below****************/    

}

let year=prompt("Pleaes enter a year");
isLeap(year);