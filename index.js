const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');


app.post("/", function(req, res){

  
  const  name = req.body.name;


  res.redirect("/");



});

app.get("/", function(req, res){
  res.render("index.ejs", {
    });
});



app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });