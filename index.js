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

//PORT
// const config = require("./config").getConfig(),
//   PORT = config.PORT;

// console.log("✔ Bootstrapping Application");
// console.log(`✔ Mode: ${config.MODE}`);
// console.log(`✔ Port: ${PORT}`);

// app
//   .listen(PORT)
//   .on("error", (err) => {
//     console.log("✘ Application failed to start");
//     console.error("✘", err.message);
//     process.exit(0);
//   })
//   .on("listening", () => {
//     console.log("✔ Application Started");
//   });

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server running at port:${port}`);
})
