var l1=document.getElementById("highlighted");
//console.log(l1);
var l2_l3=document.getElementsByClassName("bolded");
//console.log(l2_l3);
//var t=document.getElementsByTagName("li");
//console.log(t);
l1.classList.add("another-class");
//l2_l3.classList.add("another-class");
l2_l3[0].classList.add("some-class");
l2_l3[1].classList.add("some-class");
var button=document.querySelector("button");
var para=document.querySelector("p");
button.addEventListener("click",function(){para.textContent="You clicked!!!!!";});
var bod=document.querySelector("body");
var ifColored=false;
button.addEventListener("click",function(){
    if(ifColored)
    {
bod.style.backgroundColor="pink";
ifColored=!ifColored;   
}
else{
bod.style.backgroundColor="white";
ifColored=!ifColored;}
});

