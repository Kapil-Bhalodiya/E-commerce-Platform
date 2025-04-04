const jwt  = require("jsonwebtoken")
const { ApiError } = require("../utils/ApiError")
const { asyncHandler } = require("../utils/asyncHandler")
const User = require("../models/user.model")

const jwtVerify = asyncHandler(async(req,res,next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
        if(!token) throw new ApiError(401, "Unauthorized User.!")
        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        if(!user) throw new ApiError(401, "Invalid Access Token.!")
        req.user = user    
        next()
    } catch (error) {   
        res.json(new ApiError(401, error?.message || "Invalid Access Token - Token Verifaction Fail.!"))
    }
})

module.exports = jwtVerify