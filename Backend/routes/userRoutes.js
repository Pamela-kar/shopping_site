const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');
router.post('/user/create',userController.create_user);
module.exports = router;