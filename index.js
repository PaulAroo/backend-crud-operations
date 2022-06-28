const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/todoRoutes");

const app = express();

app.use(json());

app.use("/", routes);

const port = process.env.PORT || 3030;

const DbURI =
  "mongodb+srv://zuri-backend:zuriThrills@cluster0.67111w7.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DbURI)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server is running on port ${port}`);
});
