var express=require('express');
var app=express();
var mongoose=require('mongoose')

var bodypar=require('body-parser');
mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser:true});


app.use(bodypar.urlencoded({extended:true}));


 var campgroundSchema=new mongoose.Schema({
name:String,
image:String,
description:String
 })  ;    
 var Campground=mongoose.model("Campground",campgroundSchema);
 
//  Campground.create({
//     name:"Manas",
//     image:"https://www.photosforclass.com/download/pixabay-4363073?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e3d3404a55af14f6da8c7dda793f7f1636dfe2564c704c7d297ed2944cc05c_1280.png&user=bowl_of_nicole",
//     description:"This is a new camp setup which is being liked many natives. "
//  },(err,result)=>{
//      if(err)
//      console.log("Something went wrong");
//      else
//      {
//          console.log("Details added in database:");
//          console.log(result);
//      }
//  })



app.get("/",(req,res)=>{
res.render("landing.ejs");

});


app.get("/campgrounds",(req,res)=>{

    

    Campground.find({},(err,r)=>{
        if(err)
        console.log("There's something Wrong!")
        else{
            
           
            
            console.log("DB shown succesfully!!!!")
            
            res.render("index.ejs",{thiscamp:r})
            
        }
    });
    


});


app.post("/campgrounds",(req,res)=>{
var name=req.body.name
var image=req.body.image;
var description=req.body.description;
var newCamp={name:name,image:image,description:description};
Campground.create(newCamp,(err,data)=>{
    if(err)
    console.log("Something is not right !!!!");
    else{
        console.log("Requested image added to database!!!");
    }
});
res.redirect("/campgrounds");

});

app.get("/campgrounds/new",(req,res)=>{
res.render("new.ejs");
});

app.get("/campgrounds/:id",(req,res)=>{
    Campground.findById(req.params.id,(err,foundCamp)=>{
if(err)
console.log("ERROR")
else{
    res.render("show.ejs",{campg:foundCamp});
}
    });

});
app.get("/campgrounds/remove/:id",(req,res)=>{
    var id=req.params.id;
    var rec={_id:id}
    Campground.remove(rec,(err,res)=>{
    if(err)
    console.log(err);
    else{
    console.log("Removed!!!!");
    console.log(res);
    
    }
    });
    res.redirect("/campgrounds"); 
    
    });



app.listen(3000,function(){
    console.log("YelpCamp server started");
});

