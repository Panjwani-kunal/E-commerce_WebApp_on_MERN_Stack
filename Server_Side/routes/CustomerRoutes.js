module.exports = (app) => {
    const CustController = require("../controllers/CustomerController")

    app.post("/addcustomer",CustController.addCustomer)
    app.get("/allcustomer",CustController.allCustomer)
}