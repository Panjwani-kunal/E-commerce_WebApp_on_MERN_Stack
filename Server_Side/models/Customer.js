const mongoose = require("mongoose")

const CustomerSchema = mongoose.Schema({
    CustName : String,
    CustMobNo: Number,
    CustAddress: String,
})

module.exports=mongoose.model("Customer",CustomerSchema)