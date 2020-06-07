var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo");


var postSchema=new mongoose.Schema({
title:String,
content:String
});
var Postmodel=mongoose.model("Post",postSchema);

var userSchema=new mongoose.Schema({
    email:String,
    name:String,
    post:[postSchema]

});
var User=mongoose.model("User",userSchema);
var nu=new User({
email:"yashbhatnagar10@gmail.com",
name:"Yash Saran"
});

nu.post.push({
    title:"Happy Ending",
    content:"There is always a happy ending!!!!"

});

nu.save((err,user)=>{
    if(err)
    console.log(err);
    else
    console.log(user);
});

// var np=new Postmodel({
//     title:"Happy Ending",
//     content:"There is always a happy ending!!!!"
// }) 
// np.save((err,post)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log(post);
// })
User.findOne({name:"Yash Saran"},(err,user)=>{
 if(err)
 console.log(err);
 else{
     user.post.push({
         title:"New Maveric",
         content:"New mav has been initiated!!!!!!"
     });
     user.save((err,user1)=>{
        if(err)
        console.log(err);
        else
        console.log(user1);
     });
 }
    
})