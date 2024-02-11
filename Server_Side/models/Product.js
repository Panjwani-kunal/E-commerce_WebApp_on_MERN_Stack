const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    ProdBrand : String,
    ProdName : String,
    ProdCategory : String,
    ProdOrginalPrice : Number,
    ProdPrice : Number,
    ProdDiscount : String,
    ProdType : String,
    ProdSize : [String],
    ProdImage : String,
    ProdIsAva : Boolean
})

module.exports = mongoose.model("Product",ProductSchema)