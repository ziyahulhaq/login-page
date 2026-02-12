const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  //  username:String,
  // email:String,
  // password:String,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    // lowercase: true,
    // trim: true,
    // match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
},{ timestamps: true });
const StudentModel = mongoose.model("student", studentSchema);
module.exports = StudentModel;
