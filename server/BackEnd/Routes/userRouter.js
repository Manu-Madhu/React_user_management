const express = require('express');
const user = express.Router();

const userController = require('../Controllers/userController');

user.get('/',userController.home);
user.post('/',userController.signUp);
user.put('/:id',userController.edit);
user.delete('/:id',userController.dele);


user.get('*',(req,res)=>{
      res.redirect('/')
})
module.exports = user;