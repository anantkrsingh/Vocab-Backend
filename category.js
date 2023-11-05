const mongo = require("mongoose")

const category = new mongo.Schema(({
    category_id:{type:String},
    category_name:{type:String}
}))


module.exports = mongo.model("Categories",category)