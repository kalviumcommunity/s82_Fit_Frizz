const express=require('express')
const port=4001
const app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.listen(port,()=>{
    console.log("server")
})