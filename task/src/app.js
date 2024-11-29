const express = require("express");
const routes = require("./routes");
const {
  notFoundHandler,
  globalErrorHandler,
} = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.use(notFoundHandler);

app.use(globalErrorHandler);

module.exports = app;
