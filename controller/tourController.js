const Tour = require("../models/tourModel");
const ApiFeature = require("../utils/apiFeatures");

exports.getAllTours = async (req, res, next) => {
    try {
        const features = new ApiFeature(Tour.find(), req.query)
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
exports.createTour = async (req, res, next) => {
    try {
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: "success",
            data: { tour: newTour },
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err,
        });
    }
};
exports.getTour = async (req, res, next) => {
    try {
        const tour = await Tour.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: { tour },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "not found",
        });
    }
};
exports.updateTour = async (req, res, next) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: { tour },
        });
    } catch (error) {}
};
exports.deleteTour = async (req, res, next) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            data: null,
        });
    } catch (error) {}
};
