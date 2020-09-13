const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }    
});

module.exports = User = mongoose.model('user',UserSchema);
=======
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
>>>>>>> 56b69805ee1d39fce24fc6457b7f2c7c4aa90ae1
