const mongo = require("mongoose")
const app = require("express")()
const category = require("./category")
const content = require("./content")
require('dotenv').config();

app.get("/",(req,res)=>{
    return res.status(200).send("Hello World!")
})

app.get ("/categories",async (req,res)=>  {
    let data = await category.find()
    return res.status(200).json(data)
})

app.get("/content",async (req,res)=>{
    let data = await content.find({category:req.query.id}).select("title")
    return res.status(200).json(data)
})

app.get("/detail",async (req,res) => {
    console.log(req.query.title);
    let detail = await content.findOne({title:req.query.title}).select("details")
    return res.status(200).json(detail)

})

app.listen("5050", () => {
    console.log("Started on Port 5050")
})
console.log(process.env.MONGOOSE_URI);
mongo.connect(`${process.env.MONGOOSE_URI}/Vocab`).then(()=>{
    console.log("Connected To DB");
}).catch((error)=>{
    console.log(error);
})