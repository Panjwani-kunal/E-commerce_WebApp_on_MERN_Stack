const Customer = require("../models/Customer")

exports.addCustomer = (req,res) => {
    const cust = new Customer({
        CustName : req.body.cname,
        CustMobNo : req.body.cmobno,
        CustAddress:req.body.caddress,
    })
    cust.save()
    .then((insCust) => {
       res.status(200).json(insCust) 
    }).catch((err) => {
        res.status(500).send(err)
    });
}

exports.allCustomer = (req,res) =>{
    Customer.find()
    .then((showdata) =>{
        res.status(200).json(showdata)
    }).catch((err)=>{
        res.status(500).json(err)
    });
}