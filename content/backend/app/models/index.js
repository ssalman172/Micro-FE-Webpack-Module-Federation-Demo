const dbConfig = require("../config/dbConfig.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./productModel.js")(mongoose);
module.exports = db;
