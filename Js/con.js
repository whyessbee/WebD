var number=prompt("Guess the number:");
var rn=10;
if(Number(number)<rn)
	alert("Too Low!!!! Try again.");
else if(Number(number)>rn)
	alert("Too high!!!Try again.");
else
	alert("Correct!!!");