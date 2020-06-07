var li=document.querySelectorAll("li");

for(var i=0;i<li.length;i++)
{
    li[i].addEventListener("click",function()
    {
        if(this.style.color=="green")
        this.style.color="black";
        else
        this.style.color="green";


    })
}