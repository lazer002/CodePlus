const mongoose = require('mongoose');
const bcrypt = require('bcrypt')




signup_schema=mongoose.Schema({
    Username:{
    type:String

},
Email:{
    type:String

},
Password:{
    type:String

},
Phone_number:{
    type:String

},
messages:[{
    Username:{ type:String},
    Email:{ type:String},
    Phone_number:{ type:String},
    subject:{ type:String},
    message:{ type:String}
}]
})


// Student.pre('save', function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     } 
//     this.password = bcrypt.hashSync(this.password, 10)
//     next()
    
// })
// Student.methods.comparePassword = function (plaintext, callback) {
//     return callback(null, bcrypt.compareSync(plaintext,this.password))
// }


signup_schema.pre('save',async function (next) {
     if (this.isModified('Password')) {
        this.Password= await bcrypt.hash(this.Password,12)}
        next()
})

// signup_schema.methods.generateAuthtoken=async function(){
// try{
// let token = jwt.sign({_id:this._id},process.env.Secret_key);
// this.tokens=this.tokens.concat({token:token})

// await this.save();
// return token
// }
// catch(err){
// console.log(err)
// }}

// signup_schema.methods.generateAuthtoken = async function () {
//     try {
    
//       const token = jwt.sign({_id:this._id}, process.env.Secret_key);
//       this.tokens = this.tokens.concat({ token: token });
//       await this.save();
//       return token;
//     } catch (err) {
//       console.log(err);
//     }
//   };




  
signup_schema.methods.addMessage = async function(Username,Email,Phone_number,subject,message){
    try{
this.messages=this.messages.concat({Username,Email,Phone_number,subject,message})
await this.save()
return this.messages
    }
    catch(err){
    console.log(er)}
}



let Signup = mongoose.model("Code+", signup_schema)
module.exports = Signup