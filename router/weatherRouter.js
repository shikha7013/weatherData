const express=require("express")
const weatherRouter=express.Router();
const {getData}=require('../controller/weatherController')
weatherRouter.get("/",getData)
module.exports.weatherRouter=weatherRouter;