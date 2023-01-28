const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
const connectDB = require("./db");

//Logger
app.use(logger("dev"));

//BodyParser
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//CORS
app.use(cors());

//.env
dotenv.config();

//Routes
app.use("/api/farmer", require("./routes/farmer")); //Farmer Api
app.use("/api/crop", require("./routes/crop")); //Crop Api

//Connect to DB.
connectDB();

//static files
app.use(express.static(path.join(__dirname, "./krishiiyan/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./krishiiyan/build/index.html"));
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server running at port:${port}`);
})
