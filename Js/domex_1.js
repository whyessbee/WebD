var h2=document.querySelector("h2");
h2.style.color="pink";
var back=document.querySelector("body");
var isBlue=false;
setInterval(function(){
if(isBlue==false)
back.style.background="blue";
else
back.style.background="white";
isBlue=!isBlue;
},500);