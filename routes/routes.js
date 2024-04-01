const express=require("express")
const send = require("../controllers/sendEmail")

const routes=express.Router()


routes.post("/send",send)


module.exports=routes