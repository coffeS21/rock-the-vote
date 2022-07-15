const express = require(`express`)
const morgan = require(`morgan`)
const mongoose = require(`mongoose`)
const server = express()

//middle wear
server.use(morgan(`dev`))
server.use(express.json())

//routes

//general route error
server.use((req,res,next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})
//servers
mongoose.connect( "mongodb+srv://chai:chai@rock-the-vote.genfd.mongodb.net/?retryWrites=true&w=majority", () => console.log('connected to database'))
mongoose.connection.on(`connected`, ()=>{
    console.log(`mongoose is connected!`)
})
server.listen(8000, ()=>{
    console.log(`the server is running`)
})