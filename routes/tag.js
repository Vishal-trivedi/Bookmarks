
const express = require('express')
const {createTag,updateTag,deleteTag,addTag,removeTag,Tags} = require('../controllers/tag')
 



const router = express.Router()

router.post('/create',createTag)

router.put('/:Id',updateTag)

router.delete('/:Id',deleteTag)

router.post('/add/:tagId',addTag)
router.post('/remove/:tagId',removeTag)

router.get('/',Tags)





module.exports = router


