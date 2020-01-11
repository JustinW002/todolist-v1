const express=require("express");
const bodyParser=require("body-parser");
const ejs=require('ejs');
const app=express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000,function(){
    console.log("connected to port 3000");
});

var items=["buy food", "cook food", "eat food"];

app.get("/",function(req,res){
    var today= new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day=today.toLocaleDateString("en-US",options);
    res.render("list",{kindOfDay:day, newListItems:items});
});

app.post("/",function(req,res){
    var newListItem=req.body.newItem;
items.push(newListItem);
    res.redirect('/');
});





