const express=require("express")
const cors=require("cors")
const routes= require("./routes/routes")
require("dotenv").config()


const app=express()


const allowedOrigins = ['http://localhost:9090'];

app.use(express.json())
app.use(cors({
    origin:allowedOrigins
}))


app.use('/email',routes)

const PORT= process.env.PORT 
 app.listen(PORT,()=>{
    console.log('SERVIDOR RONDANDO')
 })