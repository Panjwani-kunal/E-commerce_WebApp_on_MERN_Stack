module.exports = (app) => {
    const ProdController = require("../controllers/ProductController")

    app.post("/addprod",ProdController.addproduct)
    app.get("/allprod",ProdController.allprod)

    app.post("/updatePro",ProdController.updateprod)
    app.post("/deleprod",ProdController.deleteprod)

    app.post("/prodbytypeandcat",ProdController.getProdByTypeAndCategory)
}