const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(" ")[1].replace(/^"(.*)"$/, '$1');
    if(!token){
        return res.status(401).json({success: false, message: "Access token not found"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId
        req.isAdmin = decoded.isAdmin

        next()
    }
    catch(err){
        return res.status(401).json({ success: false, message: "Invalid token"})
    }
}


const verifyTokenAdmin = (req, res, next) => {

    if(!req.isAdmin){
        return res.status(403).json({success: false, message: "You are not Admin..."})
    }

    next()
}

module.exports = {verifyToken, verifyTokenAdmin}