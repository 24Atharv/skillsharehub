import dotenv from 'dotenv'
dotenv.config();
import express = require("express");
const userRouter = express.Router();
import { PrismaClient } from '@prisma/client'
const client = new PrismaClient();
import jwt from 'jsonwebtoken'
const JWT_CODE = process.env.JWT_CODE as string;

userRouter.post("/signup", async (req, res) => {
    const { name, password, email, username } = req.body;
    const newUser = await client.user.create({
        data: {
            name: name,
            password: password,
            email: email,
            username: username
        }
    })

    if(newUser) {
        res.json({
            message: "signin"
        })
        console.log("Create the new User: " + newUser);
    }
    else {
        res.json({
            message: "Error occur"
        })
    }
})

userRouter.post("/signin", async (req, res) => {
    const { username, password} = req.body;
    const findUser = await client.user.findFirst({
        where: {
            username: username,
            password: password
        }
    })
    if(findUser) {
        console.log(findUser);
        const token = jwt.sign({
            id: findUser.id
        }, JWT_CODE);
        res.json({
            token
        })
    } 
    else {
        res.json({
            message: "Error occur"
        })
    }
})

export default userRouter;
