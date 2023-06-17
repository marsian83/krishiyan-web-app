const mongoose = require("mongoose"),
  config = require("./config").getConfig();

const url = config.MONGO_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://<username>:<password>@cluster0.4d6novn.mongodb.net/",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    mongoose.set('strictQuery', false)
    console.log(`Database connected!`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
