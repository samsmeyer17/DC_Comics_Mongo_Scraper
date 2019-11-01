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
  axios.get("https://www.wsj.com/").then(function(response) {
    var $ = cheerio.load(response.data)

    $("article h3").each(function(i, element) {
      
    })
  })
})