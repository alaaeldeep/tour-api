const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

//1) middleware
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

module.exports = app;
