const config = require("../config/config")
const jwt = require("jsonwebtoken")

exports.verifyusertoken = (req,res,next) => {
    let token = req.headers.authorization
    console.log(token)
    if(!token) return res.status(401).send("Acess denied")


    try {
        token = token.split(' ')[1]
        if(token === 'null' || !token) return res.status(401).send("Unauthrised req")
        // console.log("jwt")
        let verifiedUser = jwt.verify(token, config.TOKEN_SECRET)
        // console.log(verifiedUser)
        if(!verifiedUser) return res.status(401).send("user not verified")
        req.user = verifiedUser
        console.log(req.user)
        next();

    }
    catch {
        res.status(400).send("Invalid Token")

    }
}

exports.IsUser = async (req, res, next) => {
    console.log(req.user.user_type_id)
    if(req.user.utid === 0) {
        next();
    }
    return res.status(401).send("Unautherised USER..!")
}

exports.IsAdmin = async(req, res, next) => {
    if(req.user.utid === 1){
        next();
    }
    return res.status(401).send("Unautherised ADMIN..!")
}