var express=require('express');
var request=require('request');
var app=express();


app.get("/",(req,res)=>{

res.render("search.ejs")



});








app.get("/results",(req,res)=>{
    var st=req.query.searchQ;
request("http://www.omdbapi.com/?s="+st+"&apikey=thewdb",(err,response,body)=>{

if(!err && response.statusCode==200)
{
    var jbody=JSON.parse(body);
 res.render("results.ejs",{thisdata:jbody});
}
else
console.log(err);


});

});









app.listen(3000);
