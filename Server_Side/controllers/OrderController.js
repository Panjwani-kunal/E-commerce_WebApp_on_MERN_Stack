const Order = require("../models/Order")

exports.addOrder = (req,res) => {
    const ord = new Order({
        OrderTotal : req.body.ordtotal,
        NoOfItem : req.body.ordnoitems,
        OrderStatus : req.body.ordstatus,
        CustoId : req.body.cid,
        OrderItems : req.body.orditems
    })
    ord.save()
        .then((insOrd) => {
            res.status(200).json(insOrd)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.getorders = (req,res) => {
    Order.find()
    .populate('CustoId')
    .populate('OrderItems.prod')
    .then((orders) => {
        res.status(200).json(orders)
    }).catch((err) => {
        res.status(500).send(err)
    });
}