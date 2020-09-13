const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

<<<<<<< HEAD
const connectDB = async () =>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("MongoDB Connected...");
    }catch(err){
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;
=======
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mern-app', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('mongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
>>>>>>> 56b69805ee1d39fce24fc6457b7f2c7c4aa90ae1
