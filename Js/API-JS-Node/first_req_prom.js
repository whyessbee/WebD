var prom=require("request-promise");

prom('https://jsonplaceholder.typicode.com/users/1').then((body)=>{
console.log(JSON.parse(body));
})
.catch((err)=>{
    console.log(err);
});