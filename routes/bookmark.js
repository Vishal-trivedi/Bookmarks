
const express = require('express')
const {createBookmark,updateBookmark,deleteBookmark,Bookmarks} = require('../controllers/bookmark')
 



const router = express.Router()

router.post('/create',createBookmark)

router.put('/:Id',updateBookmark)

router.delete('/:Id',deleteBookmark)

router.get('/',Bookmarks)





module.exports = router


