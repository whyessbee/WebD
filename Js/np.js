var express=require('express');
var app=express();


app.get("/",function(req,res){

res.send("Hi there!!!!!");


});

app.get("/bye",function(req,res){
res.send("Ok bye!!!!");

});

app.get("/dog/:name/comments/:info",function(req,res){
    console.log("Someone made a request to /dog");
    var na=req.params.name;
    var inf=req.params.info;
res.send("Welcome Mr. "+na+"to the info page of: "+inf);
});

app.get("*",function(req,res){
    res.send("Bad Route!!!!Kindly check with the server!!!!");
})


app.listen(3000);
