var express=require("express");
var app=express();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
var name=["Tony","Miranda","Jhon"];

app.get("/",function(req,res){
 
res.render("home.ejs");

});

app.get("/friends",function(req,res){

res.render("friends.ejs",{thisname:name});

});

app.post("/addfriend",function(req,res){
    var nfriend=req.body.newf;
    name.push(nfriend);
    var msg="You have added " +nfriend+" to the page";
//res.send("You have added " +nfriend+" to the page");
res.redirect("/friends");
});






app.listen(3000);