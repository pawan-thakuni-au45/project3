const express=require('express')
const env=require('dotenv')
env.config({path:'./env'})

const app=express()
app.get('/',(req,res)=>{
    res.send('hello world  nice to see you hello world again;');
})
const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`server running in port ${process.env.NODE_ENV}on port ${PORT} `))

console.log("dfdvfdvdfv");