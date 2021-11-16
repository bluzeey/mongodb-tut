import mongoose from 'mongoose'
const Schema=mongoose.Schema;

const MarioCharSchema=new Schema({
    name:String,
    weight:Number
})

export const MarioChar=mongoose.model('marioChar',MarioCharSchema)

