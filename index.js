const express=require("express")
const routes= require("./routes/routes")
require("dotenv").config()
 const app=express()


 app.use(express.json())


app.use('/email',routes)

const PORT= process.env.PORT 
 app.listen(PORT,()=>{
    console.log('SERVIDOR RONDANDO')
 })