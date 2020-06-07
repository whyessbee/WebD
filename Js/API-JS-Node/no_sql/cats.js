var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/cat_db");

var catSchema=new mongoose.Schema({
name:String,
age:Number,
temperament:String

});

var Cat=mongoose.model("Cat",catSchema);

var george=new Cat({
name:"Locus",
age:4,
temperament:"Grumpy"

});

// george.save((err,Cat)=>{

// if(err)
// console.log("Something went wrong");
// else{
// console.log("Object added!!!!")
// console.log(Cat);
// }

// });

Cat.create({
   name:"Cooch",
   age:5,
   temperament:"Candid" },(err,cat)=>{
if(err)
console.log("Something went wrong!!!!!");
else{
    console.log("Data inserted!!!!")
    console.log(cat);
}
});

Cat.find({},function(err,cats){
if(err)
console.log("Something went wrong");
else{
console.log("Everything worked fine!!!!");
console.log(cats);
}

});

