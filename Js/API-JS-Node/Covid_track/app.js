var express=require('express');
var app=express();
var bodyparser=require('body-parser');

var request = require("request");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// var options = {
//   method: 'GET',
//   url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
//   qs: {country: 'Canada'},
//   headers: {
//     'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
//     'x-rapidapi-key': 'bdde35aed9msh0daf2690d3cde84p1a847ajsn18d3ad69ac93'
//   }
// };


// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);
// var d=JSON.parse(body);
// console.log(d.data.covid19Stats);
// //console.log(JSON.stringify(body.error));
// 	//console.log(JSON.parse(body.data));
// });




app.get("/",(req,res)=>{
res.render("index.ejs");
});

app.post("/show",(req,res)=>{
    var c=req.body.Country;
    var d;
    var options = {
        method: 'GET',
        url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
        qs: {country: c},
        headers: {
          'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
          'x-rapidapi-key': 'bdde35aed9msh0daf2690d3cde84p1a847ajsn18d3ad69ac93'
        }
      };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
     d=JSON.parse(body);
    console.log(d.data.covid19Stats[0].country);
    res.render("show.ejs",{cd:d});
    });
    
    

});

// app.get("/show",(req,res)=>{


// res.render("show.ejs",{cname:c});
// });

app.listen(3000);