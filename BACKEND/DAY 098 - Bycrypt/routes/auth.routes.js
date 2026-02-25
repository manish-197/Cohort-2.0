const express = require("express");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();
const crypto = require("crypto")


authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email })

    if(isUserExist){
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const hashPassword = crypto.createHash("md5").update(password).digest("hex");
    
    
    const user = await userModel.create({
        name, email, password: hashPassword
    });

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET_KEY,
    )
    
    res.cookie("jwt_token", token)

    res.status(201).json({
        message: "User registered successfully",
        user,
        token
    });
});

authRouter.post("/login", async (req,res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if(!user){
        return res.status(400).json({
            message: "User not found"
        })
    }

    const isPasswordMatch = await user.password == crypto.createHash("md5").update(password).digest("hex");

    if(!isPasswordMatch){
        return res.status(400).json({
            message: "invalid password"
        })
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "24h"
        }1
    )
    res.cookie("jwt_token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user,
        token
    });
})

module.exports = authRouter;