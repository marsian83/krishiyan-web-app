const mongoose = require("mongoose"),
  config = require("./config").getConfig();

const url = config.MONGO_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    mongoose.set("strictQuery", false);
    console.log(`Database connected! hii from db`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
