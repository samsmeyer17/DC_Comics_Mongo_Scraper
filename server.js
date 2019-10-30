import { Mongoose } from "mongoose";

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI)

import { express } from "express";
import { expresshandlebars } from "express-handlebars";
import { logger } from "morgan";
import { axios } from "axios";
import { cheerio } from "cheerio";
import { db } from "./models";

