const mongoose = require("mongoose");
const {hashPassword} = require("../Utilities/password_services.js");
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String

});



// before saving user to DB
UserSchema.pre("save", async function(next){
//if the the password is not modified next()
let user = this;
if (!user.isModified("password"))return next();
//try {} create a variable hashed by using hashPassword
try {
    let hash = await hashPassword(this.password);
// set this.password = hash
    this.password = hash
//next()
} catch(error){
    if(error) throw error;
}
});












module.exports = mongoose.model("user", UserSchema);
