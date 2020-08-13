const Bookmark = require('../models/Bookmark')
const asyncHandler = require('../middleware/async')

exports.createBookmark = asyncHandler(async (req,res,next) =>{
    const bookmark = await Bookmark.create(req.body)
    
    res.status(201).json({
        sucess:true,
        data:bookmark
    })
    })

exports.updateBookmark = asyncHandler(async (req,res,next) =>{
    d = Date.now()
    fields = {...req.body,updatedAt:d}
   
    const bookmark = await Bookmark.findByIdAndUpdate(req.params.Id,fields,{
            new:true,
            runValidators:true
        })
    res.status(201).json({
        sucess:true,
        data:bookmark
        })
         
      })  
      
exports.deleteBookmark =asyncHandler(async (req,res,next) =>{
    const bookmark = await Bookmark.findByIdAndDelete(req.params.Id)
       
        res.status(201).json({
            sucess:true,
            msg:'Bookmark is deleted'
        })
         
      } )     

exports.Bookmarks =asyncHandler(async (req,res,next) =>{
     const bookmarks = await Bookmark.find().populate('tags')
        
        res.status(201).json({
            sucess:true,
            data:bookmarks
        })
        })
    