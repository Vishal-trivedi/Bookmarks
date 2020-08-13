const Tag = require('../models/Tag')
const Bookmark = require('../models/Bookmark')
const asyncHandler = require('../middleware/async')

exports.createTag =asyncHandler(async (req,res,next) =>{
    const tag = await Tag.create(req.body)
    
    res.status(201).json({
        sucess:true,
        data:tag
    })
    })

// exports.updateTag =asyncHandler(async (req,res,next) =>{
//     const tag = await Tag.findByIdAndUpdate(req.params.id,req.body,{
//             new:true,
//             runValidators:true
//         })
//         console.log(tag)
//     res.status(201).json({
//         sucess:true,
//         data:tag
//         })
         
//       } )
      
      exports.updateTag = asyncHandler(async (req,res,next) =>{
        const tag = await Tag.findByIdAndUpdate(req.params.Id)

        tag.title= req.body.title
        tag.updatedAt = Date.now()
        
        await tag.save()

        res.status(201).json({
            sucess:true,
            data:tag
            })
             
          })        
      
exports.deleteTag =asyncHandler(async (req,res,next) =>{
    const tag = await Tag.findByIdAndDelete(req.params.id)
       
        res.status(201).json({
            sucess:true,
            msg:'Tag is deleted'
        })
         
      })      

exports.addTag =asyncHandler(async (req,res,next)=>{
    const bookmark = await Bookmark.findById(req.body.bookmarkId)
    bookmark.tags.push(req.params.tagId)
    await bookmark.save()

    return res.json({sucess:true,msg:'Tag is added to Bookmark'})
} )  


exports.removeTag =asyncHandler(async (req,res,next)=>{
    const bookmark = await Bookmark.findById(req.body.bookmarkId)
    bookmark.tags.pull(req.params.tagId)
    await bookmark.save()

    return res.json({sucess:true,msg:'Tag is removed from Bookmark'})
}) 

exports.Tags =asyncHandler(async (req,res,next) =>{
    const tags = await Tag.find()
    
    res.status(201).json({
        sucess:true,
        data:tags
    })
    })

