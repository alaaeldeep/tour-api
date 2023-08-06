const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A user name must be provided"],
    },
    email: {
        type: String,
        required: [true, "A user email must be provided"],
        unique: true,
        lowerCase: true,
        validate: [validator.isEmail, "please enter a valid email"],
    },
    photo: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "A user password must be provided"],
        minLength: 8,
    },
    confirmPassword: {
        type: String,
        /*    required: [true, "A user confirm password must be provided"], */
        minLength: 8,
    },
});

module.exports = mongoose.model("User", userSchema);
