const mongoose = require('mongoose')


const BookmarkSchema = new mongoose.Schema({
    link:{
        type:String,
        required:[true,'Please add a link'],
        unique:true
    },
    
    title:{
        type:String
       
    },
    createdAt:{
         type:String,
         default:Date.now
     },
     updatedAt:{
        type:String

     },
     tags:[{
         type:mongoose.Schema.ObjectId,
         ref:'Tag'
     }],
    
     





})






module.exports  = mongoose.model('Bookmark',BookmarkSchema) 