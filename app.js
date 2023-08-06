const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const errorController = require("./controller/errorController");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

//1) middleware
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

app.all("*", (req, res, next) => {
    const err = new AppError("not found", 404);
    next(err);
});

app.use(errorController);
module.exports = app;
