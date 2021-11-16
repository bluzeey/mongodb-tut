import  mongoose from "mongoose";
import express from 'express'
mongoose.connect('mongodb+srv://sahilm:sahilm123@mongodb-tut.stjbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
    console.log('Connected , Launch the fireworks!')
}).on('error',function(error){
    console.log('Connection Error:',error)
})
// beforeEach(function(done){
//     mongoose.connection.collection.mariochars.drop(function(){
//     done();
//     })
// })
const app=express()