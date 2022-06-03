const express = require("express");
const fs = require('fs')
const cors = require("cors");
const app = express();
const connectDb = require('./config/connectDb')
const userRouter = require("./routes/user.routes");
app.use(cors());
require('dotenv').config()  
const DIR = '../client/public/images'  
  if(!fs.existsSync(DIR)){
    fs.mkdirSync(DIR, (error) => {
      if(error){
        console.log('Folder exists already.')
      } else {
        console.log('New folder has been created.')
      }
    }) 
  }
  
  app.use('../client/public/images', express.static('images'))
  app.use('/user',userRouter);
  connectDb();
  app.listen(5000, () => console.log("Server Running..."));