var mongoose = require("mongoose");
// creating sceham
const userSchema = new mongoose.Schema({
  username: String,
  location: String
},{collection:"reactusers"});
mongoose.model("users", userSchema);
