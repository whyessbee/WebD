
var b=document.getElementById("b1");
var c=document.getElementById("b2");
var tabl=document.createElement("table");

var bod=document.getElementsByTagName("body")[0];
    
tabl.border=1;
tabl.style.alignSelf="center";

var r1=tabl.insertRow();
var ce0=r1.insertCell(0);
var ce1=r1.insertCell(1);
var ce2=r1.insertCell(2);
var ce3=r1.insertCell(3);
var ce4=r1.insertCell(4);
var ce5=r1.insertCell(5);
ce0.innerHTML="NAME";
ce1.innerHTML="TYPE";
ce2.innerHTML="ADDRESS";
ce3.innerHTML="EMAIL";
ce4.innerHTML="Mobile"
ce5.innerHTML="Location"
//var data=new Object();
tabl.appendChild(r1);

b.addEventListener("click",function(){
    
    var r2=tabl.insertRow();
    var name=document.getElementById("name").value;
//data.n1=name;
    
var type=document.getElementsByName("type")
var typechoice="";
if(type[0].checked)
typechoice=document.getElementById("result").value=type[0].value;
else
typechoice=document.getElementById("result").value=type[1].value;
//data.t=typechoice;
var add=document.getElementById("address").value;
//data.a=add;
var em=document.getElementById("email").value;
//data.e=em;
var mn=document.getElementById("cnumber").value;
//data.n=mn;
var loc=document.getElementById("location").value;
//data.l=loc;
var c0=r2.insertCell(0);
c0.innerHTML=name;

var c1=r2.insertCell(1);
c1.innerHTML=typechoice;

var c2=r2.insertCell(2);
c2.innerHTML=add;

var c3=r2.insertCell(3);
c3.innerHTML=em;

var c4=r2.insertCell(4);
c4.innerHTML=mn;

var c5=r2.insertCell(5);
c5.innerHTML=loc;

tabl.appendChild(r2);

bod.appendChild(tabl);

});


c.addEventListener("click",function(){
tabl.style.display='none';
});




