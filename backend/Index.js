const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/auth");

const port = process.env.port || 5000;
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://yuvi:yuvisurya@cluster0.iwjmuav.mongodb.net/tsihotels?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((e) => console.log(e));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", router);

app.listen(port, () => {
  console.log(`backend is working on port ${port}`);
});