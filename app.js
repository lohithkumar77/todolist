//jshint version:6
const express=require("express");
const bodyParser=require("body-parser");
const date = require(__dirname + "/date.js");

const app=express();
const items=["Buy food","Cook food","make Food"]; //when we declare const as array we can add elements in array but we cant assign the  array to new element in javascript
const workitems=[];
app.set('view engine', 'ejs');//it sets view engine of express to ejs this code from ejs.io it assumes views directory contains list.ejs file
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let day=date.getDate();
app.get("/",function(req,res)
{


  res.render("list",{listTitle: day,newListitems:items}); //here  when list.ejs is trigerred then value of day variable is copied to dayOfweek variable of ejs

});

app.post("/",function(req,res)
{   var txt= req.body.nametxt;
  if(req.body.list == "Work List")
  {
    workitems.push(txt);
    res.redirect("/work");
  }
  else
  {
  items.push(txt);
  res.redirect("/");
}
});

app.get("/work",function(req,res)
{
res.render("list",{listTitle: "Work List",newListitems:workitems});

});
app.post("/work",function(req,res)
{
  let worklist= req.body.nametxt;
  items.push(worklist);
  res.redirect("/work");
});
app.listen(3000,function()
{
  console.log("server has started");
});
