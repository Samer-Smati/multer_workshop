const userSchema = require('../models/user.model');
const roleSchema = require('../models/role.model');

exports.AddUser =  async (req, res) => {
    
    try {    
    
      if (req.file) {
        const role = await roleSchema.find({roleName:'user'});
     
        const newUser = new userSchema({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password,
            role:role._id,
            avatar:'/images/'+req.file.originalname,
        })
        console.log(newUser)
        await newUser.save()
       return res.status(200).send({msg:'Added successfully'})
      } else {
       return res.status(400).send({
          status: false,
          data: "File Not Found :(",
        });
      }
    } catch (err) {
      return res.status(500).send(err);
    }
  }