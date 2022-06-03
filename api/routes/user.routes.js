const express = require('express');


const userRouter = express.Router();
const {AddUser} = require('../controller/user.controller')
const {upload} = require('../middlewares/multerMiddlewares')

userRouter.post("/upload", upload.single("file"),AddUser);
  

module.exports = userRouter;