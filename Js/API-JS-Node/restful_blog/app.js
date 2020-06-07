var express=require('express'),
    bodyparser=require('body-parser'),
    mongoose=require('mongoose'),
    methodOverride=require("method-override"),
    app=express();

mongoose.connect("mongodb://localhost:27017/restful_app",{useNewUrlParser:true});
app.use(express.static("public/"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

var blogschema=mongoose.Schema({

title:String,
image:String,
body:String,
date:{
    type:Date,
    default:Date.now
    }

});

var Blog=mongoose.model("Blog",blogschema);

// Blog.create({
// title:"Dog",
// image:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80",
// body:"A cute dog bunny!!!!!!"

// });
app.get("/",(req,res)=>{
    res.redirect("/blogs");

})



app.get("/blogs",(req,res)=>{

   Blog.find({},(err,r)=>{
if(err)
console.log("error: "+err);
else{
res.render("index.ejs",{thisblog:r});    

}   

});

});

app.get("/blogs/new",(req,res)=>{
res.render("new.ejs");
});


app.post("/blogs",(req,res)=>{
Blog.create(req.body.blog,(err,newBlog)=>{
if(err)
console.log(err);
else{
    res.redirect("/blogs");
}
});
});

app.get("/blogs/:id",(req,res)=>{
    Blog.findById(req.params.id,(err,foundBlog)=>{
if(err)
console.log(err);
else{
    res.render("show.ejs",{blog:foundBlog});
}
    });
});

app.get("/blogs/:id/edit",(req,res)=>{
    Blog.findById(req.params.id,(err,foundBlog)=>{
if(err)
console.log(err);
else{
    res.render("edit.ejs",{blog:foundBlog});
}
    });

});


app.put("/blogs/:id",(req,res)=>{
Blog.findByIdAndUpdate(req.params.id,req.body.blog,(err,updatedBlog)=>{
if(err)
console.log(err);
else{
    res.redirect("/blogs/"+req.params.id);
}
});
});
app.delete("/blogs/:id",(req,res)=>{
Blog.findByIdAndDelete(req.params.id,(err)=>{
    if(err)
    console.log(err);
    else
    res.redirect("/");
})
});

app.listen(3000,()=>{
console.log("connected!!!!")
});