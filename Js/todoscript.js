var todos=[];


var choice=prompt("What would you like?");
while(choice!="quit")
{
if(choice=="list")
console.log(todos);
else if(choice=="new")
{
    var item=prompt("Enter the task");
    todos.push(item);
    alert(item+" added to todo");
    console.log(todos);
}
var choice=prompt("What would you like?");
}
console.log("quit succesfully");

