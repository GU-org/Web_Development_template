function bmiCalc(w,h){
    let bmi=(w/Math.pow(h,2));
    return Math.round(bmi);
}

let wight=prompt("Please enter your wight in KG");
let hight=prompt("Please enter your hight in m");
let bmi=bmiCalc(wight,hight);
if(bmi<18.5){
    alert("Your BMI is "+bmi+" so you are underweight.")
}
else if(bmi<24.9){
    alert("Your BMI is "+bmi+" so you have a normal weight.");
}
else {
    alert("Your BMI is "+bmi+", so you are overweight.");
}
