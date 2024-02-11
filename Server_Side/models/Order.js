const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  OrderDate: { type: Date, default: new Date() },
  OrderTotal: Number,
  NoOfItem: Number,
  OrderStatus: String,
  CustoId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  OrderItems: [
    {
      prod: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      qty: Number,
      size: String,
    },
  ],
});
module.exports = mongoose.model("Order", OrderSchema);
