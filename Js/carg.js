
function amount()
{   var wt=document.getElementById("wgt").value;
    var cat=document.getElementsByName("type");
    if(cat[0].checked)
    {
        
        if (wt<15 && wt>=5)
        { var fa=document.getElementById("n1").innerHTML;
        //alert("Total amount is"+(wt*fa));
        document.getElementById("Res").innerHTML="Amount is : "+wt*fa;
        }
        else if (wt>=15 && wt<25)
        {
            var fa=document.getElementById("n2").innerHTML;
        //alert("Total amount is"+(wt*fa));
        document.getElementById("Res").innerHTML="Amount is : "+wt*fa;
        }
        else if(wt>=25 && wt<36)
        {
            var fa=document.getElementById("n3").innerHTML;
        //alert("Total amount is"+(wt*fa));
        document.getElementById("Res").innerHTML="Amount is : "+wt*fa;
        }
    }
    else if(cat[2].checked)
    {

        if (wt<15 && wt>=5)
        { var fa=document.getElementById("e1").innerHTML;
        //alert("Total amount is"+(wt*fa));
        document.getElementById("Res").innerHTML="Amount is : "+wt*fa;
        }
        else if (wt>=15 && wt<25)
        {
            var fa=document.getElementById("e2").innerHTML;
        //alert("Total amount is"+(wt*fa));
        document.getElementById("Res").innerHTML="Amount is : "+wt*fa;
        }
        else if(wt>=25 && wt<36)
        {
            var fa=document.getElementById("e3").innerHTML;
        //alert("Total amount is"+(wt*fa));
        document.getElementById("Res").innerHTML="Amount is : "+wt*fa;
        }

    }
    else if (cat[1].checked)
    {
        if (wt<15 && wt>=5)
        { var fa=document.getElementById("p1").innerHTML;
        //alert("Total amount is"+(wt*fa));
        document.getElementById("Res").innerHTML="Amount is : "+wt*fa;
        }
        else if (wt>=15 && wt<25)
        {
            var fa=document.getElementById("p2").innerHTML;
        //alert("Total amount is"+(wt*fa));
        document.getElementById("Res").innerHTML="Amount is : "+wt*fa;
        }
        else if(wt>=25 && wt<36)
        {
            var fa=document.getElementById("p3").innerHTML;
        //alert("Total amount is"+(wt*fa));
        document.getElementById("Res").innerHTML="Amount is : "+wt*fa;
        }

    }
}

var b=document.getElementById("b1");
b.addEventListener("click",amount);

