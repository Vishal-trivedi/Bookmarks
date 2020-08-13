const mongoose = require('mongoose')


const TagSchema = new mongoose.Schema({
    
    title:{
        type:String,
        unique:true
       
    },
    createdAt:{
         type:String,
         default:Date.now
     },
     updatedAt:{
        type:String,
        

     },
     
})







module.exports  = mongoose.model('Tag',TagSchema) 