import { mongoose } from "mongoose";
import { express } from "express";
import { expresshandlebars } from "express-handlebars";
import { logger } from "morgan";
import { axios } from "axios";
import { cheerio } from "cheerio";
import { db } from "./models";

var app = express();

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI)

app.get("/scrape", function(req, res) {
  axios.get("https://www.dccomics.com/comics").then(function(response) {
    var $ = cheerio.load(response.data)

    $("div.slide__content").each(function(i, element) {
      var results = {};
      var img = $(element).find('a').find('img').attr('src');
      var title = $(element).find('span').find('a').attr('href')

      results.push({
        img: img,
        title: title
      });
    });
    db.articles.update({articles: results}, function(results) {

    })
    console.log(results);
  })
  res.send("Scrape Complete")
})

app.listen(MONGODB_URI, function() {
  console.log("App listening on: " + MONGODB_URI)
})