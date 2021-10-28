const express = require('express');
const router = express.Router();
const usersControllers = require('../crontrollers/usersCrontroller');
//crear usuario
//api usuarios
router.post('/', () =>{
    usersControllers.createUser
})

module.exports = router;