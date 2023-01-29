const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

//CONNECT TO DB
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_CONNECT_URL,
  { useNewUrlParser: true },
  () => console.log("Connected to db!")
);

//IMPORT ROUTES
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//MIDDLEWARE
app.use(express.json());

//ROUTE MIDDLEWARES
app.use("/api/users", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => console.log("Server is runnong on port 3000"));
