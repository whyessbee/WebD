var express=require('express');
var app=express();

app.get("/",function(req,res){
res.send("Hi there! Welcome to my assignment.");
});

app.get("/animal/:animal",function(req,res){
var animal=req.params.animal;
var sounds={
pig:"OINK OINK",
dog:"WOOF WOOF",
cow:"MOO"
};
res.send("The "+animal+" says "+sounds[animal]);
});

app.get("/repeat/:msg/:count",function(req,res){
 var msg=req.params.msg;
 var count=Number(req.params.count);
var c="";
 for(var i=0;i<count;i++){
     c+=msg;
     c+=" ";
 }
res.send(c);
 
    
 });

 app.get("*",function(req,res){
res.send("Sorry...Page not found!!!!");
});

app.listen(3000);