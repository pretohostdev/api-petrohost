const express=require("express")
const cors=require("cors")
const routes= require("./routes/routes")
require("dotenv").config()
const db=require("./db/mysql")


const app=express()



const allowedOrigins = ['http://localhost:9090',"http://localhost:5173"];

app.use(express.json())
app.use(cors({
    origin:allowedOrigins
}))
db.sync({force:true}).then(()=>console.log("conectado ao banco de dados"))

app.use('/agenda',routes)

const PORT= process.env.PORT 
 app.listen(PORT,()=>{
    console.log('SERVIDOR RONDANDO')
 })