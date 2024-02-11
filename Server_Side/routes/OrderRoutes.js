module.exports = (app) => {
    const OrderConstroller = require("../controllers/OrderController")

    app.post("/addorder",OrderConstroller.addOrder)
    app.get("/allorder",OrderConstroller.getorders)
}