const express = require("express")
const {connectMongoDb} = require('./connection')
const userRouter = require("./routes/user")


const app = express()
const PORT = 3000

connectMongoDb("mongodb://localhost:27017/user1")

app.use(express.json())
app.use("/user",userRouter)




app.listen(PORT,()=>{
    console.log(`server is running onf http://localhost:${PORT}`)
})