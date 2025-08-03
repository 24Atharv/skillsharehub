import express = require("express");
const userRouter = express.Router();
import { PrismaClient } from '@prisma/client'
const client = new PrismaClient();

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


export default userRouter;
