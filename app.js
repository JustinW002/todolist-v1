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

app.get("/",function(req,res){
    var today= new Date();
var currentDay= today.getDay();
var day="";

    if(currentDay === 6 || currentDay === 0){
       day="Weekend";
       res.render("list",{kindOfDay:day});
    }else{
        day="Weekday";
       res.render("list",{kindOfDay:day});
    }
});



