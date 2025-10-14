const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());
const mongoURL="mongodb+srv://spraneeth:Hello@testing.fsptkbl.mongodb.net/testdb?retryWrites=true&w=majority";
mongoose.connect(mongoURL)
.then(()=>{console.log("Connected to mongodb")})
.catch((err)=>{console.log("DB connection error: ",err)})
app.listen(3000,()=>{console.log("Server is running on 3000 port")});