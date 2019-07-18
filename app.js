const express = require('express');
const app = express();
const request = require('request');
app.set("view engine", "ejs");

app.get("/results", function(req, res){
  var movie = req.query.movieName;
  var url = "http://www.omdbapi.com/?&apikey=thewdb&s="+movie;

  request(url, function(error, response, body){
    if(!error && response.statusCode===200){
      var results = JSON.parse(body);
      res.render("movies",{data:results});
    }
  });
  
});

app.get("/test", function(req, res){
  res.render("movies");
});


app.listen(3000, function(){
  console.log("Listening at port 3000!!");
});