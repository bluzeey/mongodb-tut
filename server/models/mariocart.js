import { Module } from 'module';
import mongoose from 'mongoose'
const Schema=mongoose.Schema;

const MarioCharSchema=new Schema({
    name:String,
    weight:Number
})

const MarioChar=mongoose.model('marioChar',MarioCharSchema)

Module.exports=MarioChar