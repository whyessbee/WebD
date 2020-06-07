var request=require("request");
var prom=require("request-promise");

request('https://jsonplaceholder.typicode.com/users/1',function(err,response,body){
//eval(require('locus'));
if(err)
{
    console.log("There's some problem");
    console.log(err);

}
else{
    if(response.statusCode==200){
var jdata=JSON.parse(body);
       
        console.log(jdata);
}
else
console.log(response.statusCode);

}
});