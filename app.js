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
var day=selectDay(currentDay); 
    res.render("list",{kindOfDay:day});
});

function selectDay(number){
    switch (number) {
        case 0: return "Sunday"
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        default:
            console.log("incorrect date");
            return "Not a day of the week";
    }
}



