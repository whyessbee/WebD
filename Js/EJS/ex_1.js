var express=require('express');
var app=express();
app.use(express.static("public"));

app.get("/",function(req,res){
res.render("home1.ejs");
});

app.get("/fall/:thing",function(req,res){
var thing=req.params.thing;
res.render("ex1.ejs",{thingvar:thing});
});

app.get("/posts",function(req,res){

    var post=[
        { title:"Post 1",author:"Lucy"            },
        { title:"Post 2",author:"Jack"            },
        { title:"Post 3",author:"Lewis"            }

    ];
    res.render("ex2.ejs",{thispost:post});

});



app.listen(3000);
