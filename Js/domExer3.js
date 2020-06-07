//alert("CONNECTED");
var fli=document.querySelectorAll("li");

for(var i=0;i<fli.length;i++){

fli[i].addEventListener("mouseover",function(){

this.classList.add("co");

});
fli[i].addEventListener("mouseout",function(){

    this.classList.remove("co");
    
    });

fli[i].addEventListener("click",function(){

this.classList.toggle("tex");


})




}

