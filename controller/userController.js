const User = require("../models/userModel");
const ApiFeature = require("../utils/apiFeatures");
const AppError = require("../utils/appError");

exports.getAllUsers = async (req, res, next) => {
    try {
        const features = new ApiFeature(User.find(), req.query)
            .filter()
            .sort()
            .paginate();

        const tours = await features.query;

        res.status(200).json({
            status: "success",
            result: tours.length,
            data: { tours },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "not found",
        });
    }
};
exports.createUser = (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: {},
    });
};
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return next(new AppError("no user found  for this id", 404));

        res.status(200).json({
            status: "success",
            data: { user },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "not found",
        });
    }
};
exports.updateUser = (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: {},
    });
};
exports.deleteUser = (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: {},
    });
};
