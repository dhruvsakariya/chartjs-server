const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const messageRoutes = require("./routes/message");

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

// Cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/message", messageRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

mongoose
  .connect(
    "mongodb+srv://dhruvsakariya:dhruvsakariya@cluster0.zjsru.mongodb.net/November_new?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT || 4000);
  })
  .catch((err) => console.log("Mongo db", err));
