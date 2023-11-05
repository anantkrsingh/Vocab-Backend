const mongo = require("mongoose")

const content = new mongo.Schema({
    title:{type:String},
    category :{type:String},
    details:{type:String}
})

module.exports = mongo.model("Contents",content)