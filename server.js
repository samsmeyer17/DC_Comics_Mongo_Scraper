var mongoose = require("mongoose")
var express = require("express")
var expresshb = require("express-handlebars")
var logger = require("morgan")
var axios = require("axios")
var cheerio = require("cheerio")


var db = require("./models")

var PORT = process.env.PORT || 8080;

var app = express();

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI)

app.get("/scrape", function (req, res) {
  axios.get("https://www.dccomics.com/comics").then(function (response) {
    var $ = cheerio.load(response.data)

    $("div.slide__content").each(function (i, element) {
      var result = {}
      result.img = $(element).find('a').find('img').attr('src');
      result.title = $(element).find('span').find('a').attr('href')

    
    db.Article.create(result)
      .then(function (dbArticle) {
        console.log(dbArticle)
      })
      .catch(function (err) {
        console.log(err);
      });
    });
    res.send("Scrape Complete")
  })
  

  app.get("/articles", function(req, res){
    db.Article.find({})
    .then((dbArticle) => {
      res.json(dbArticle)
    })
    .catch((err) => {
      res.json(err)
    }) 
  })


})

app.listen(PORT, function () {
  console.log("App listening on: " + PORT)
})