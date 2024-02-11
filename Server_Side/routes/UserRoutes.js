
module.exports=(app) => {

const userController = require("../controllers/UserController")
const {verifyusertoken, IsUser,IsAdmin} = require("../middleware/Auth")

app.post("/register", userController.register)
app.get("/all",userController.all)

app.post("/login", userController.login)

app.get("/evts", verifyusertoken, IsUser, userController.userEvent)
app.get("/isadmin", verifyusertoken, IsAdmin, userController.adminEvent)
}

