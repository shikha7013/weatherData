const mongoose = require('mongoose');
const configs = require("../configs/configs")
mongoose.connect(configs.DB_LINK, { useNewUrlParser: true, useUnifiedTopology: true }).then(function (conn) {
    console.log("Connection to weatherDB established");
    // console.log(conn)
}).catch(function (err) {
    console.log(err);
})
const weatherSchema = new mongoose.Schema({
    "date": Number,
    "data": String

})
const weatherModel = mongoose.model("weatherModel", weatherSchema)
module.exports.weatherModel = weatherModel;