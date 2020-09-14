const express=require('express')
const app=express();
app.use(express.json())
const {weatherRouter}=require('./router/weatherRouter')
app.use("/",weatherRouter)
app.listen(3300,function(){
    console.log("Server is listening at port 3300");
})
module.exports=app