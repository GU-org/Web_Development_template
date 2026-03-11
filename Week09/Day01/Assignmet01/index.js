function whoPaying(names){
   
    let randPersonPosition=Math.floor(Math.random()*names.length);
    let randPerson=names[randPersonPosition];
    
    return randPerson;
}
let names=["Ali", "Ahmad","Mahmood"];
console.log(whoPaying(names)+" is paying for today");