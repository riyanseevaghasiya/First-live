var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');

//-------------------------|| Api's ||-------------------------------

router.post('/add',user.insert)
router.get('/view',user.getdata)
router.post('/update/:id',user.update);
router.get('/delete/:id',user.delet);    

module.exports = router;
