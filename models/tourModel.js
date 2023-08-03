const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour name must be provided"],
        unique: true,
    },
    duration: {
        type: Number,
        required: [true, "A tour duration must be provided"],
    },
    maxGroupSize: {
        type: Number,
        required: [true, "A tour maxGroupSize must be provided"],
    },
    difficulty: {
        type: String,
        required: [true, "A tour difficulty must be provided"],
    },
    ratingAverage: {
        type: Number,
        default: 4.5,
    },
    ratingQuantity: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    price: {
        type: Number,
        required: [true, "A tour price must be provided"],
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim: true,
        required: [true, "A tour summary must be provided"],
    },
    description: {
        type: String,
        trim: true,
        required: [true, "A tour description must be provided"],
    },
    imageCover: {
        type: String,
        required: [true, "A tour image must be provided"],
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    startDate: [Date],
});

module.exports = mongoose.model("Tour", tourSchema);
