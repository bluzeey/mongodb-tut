import mongoose from 'mongoose'
const Schema=mongoose.Schema;

const BookSchema=new Schema({
    title:String,
    pages:Number
})
const AuthorSchema=new Schema({
    name:String,
    age:Number,
    books:[BookSchema]
})

export const MarioChar=mongoose.model('author',AuthorSchema);
