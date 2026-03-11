const btn1=document.querySelector(".dv1 button");
btn1.addEventListener("click",fnc1 );

function fnc1(){
    alert("button 1 is clicked");
}

const btn2=document.querySelectorAll(".dv1 button")[1];
btn2.addEventListener("mouseover", over1);

function over1(){
    alert("Mouse overed !");
}

const btn3=document.querySelectorAll(".dv1 button")[2];
btn3.addEventListener("click", function(){
    alert("Button 3 is clicked ! ");
})

