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

let items=["buy food", "cook food", "eat food"];
let workItems=[];

app.get("/",function(req,res){
    let today= new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    let day=today.toLocaleDateString("en-US",options);
    res.render("list",{listTitle:day, newListItems:items});
});

app.post("/",function(req,res){
    let newListItem=req.body.newItem;
    if(req.body.list==="Work"){
        workItems.push(newListItem);
        res.redirect("/work");
    }else
    
    items.push(newListItem);
    res.redirect('/');
});

app.get("/work",function(req,res){
    let title="Work"
    res.render("list",{listTitle:title, newListItems:workItems});
});

app.post("/work",function (req,res) {
    let newListItem=req.body.newItem;
    workItems.push(newListItem);
    res.redirect("/work");
    
})







