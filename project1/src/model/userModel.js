import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   username:{
    type:String,
    required:[true,'Please provide a username'],
    unique:true,

   },
   email :{
    type: String,
    reqired: [true, 'please provide a valid email address'],
    unique:true
   },
   password:{
    type:String,
    required:[true, 'Please provide a password']
   },

  isVerified: {
    type:Boolean,
    default:false
  }, 
  isAdmin: {
    type:Boolean,
    default:false,
  },

  forgotPasswordToken: String,
  forgotPasswodTokenExpiry: Date,
  verifyToken:String,
  verifyTokenExpiry:Date,
   

})


if (mongoose.models['newapp']) {
  delete mongoose.models['newapp'];
}


// const User = mongoose.model.users || mongoose.model ('newapp', userSchema)
const User = mongoose.model ('newapp', userSchema)


export default User

