
const express = require('express');
const { generateimage } = require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage',generateimage);
// router.get('/',(req,res)=>{
//     res.render('index')
// })
module.exports = router;