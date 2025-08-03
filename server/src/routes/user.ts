import Express = require("express");
const userRouter = Express.Router();
import { PrismaClient } from '@prisma/client'
const client = new PrismaClient();

userRouter.post("/signup", async (req, res) => {
    const { name, password, email, username } = req.body;
    const user = await client.user.create({
        data: {
            name: name,
            password: password,
            email: email,
            username: username
        }
    })

    if(user) {
        res.json({
            message: "signin"
        })
    }
    else {
        res.json({
            message: "Error occur"
        })
    }
})

