const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const AppError = require("../utils/appError");

const generateToken = require("../utils/generateToken");

exports.signup = async (req, res, next) => {
    try {
        if (req.body.password === req.body.confirmPassword) {
            const hashedPassword = await bcrypt.hash(req.body.password, 12);
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                confirmPassword: hashedPassword,
            });

            const token = generateToken(user._id);
            res.status(201).json({
                status: "success",
                token,
                data: { user },
            });
        } else {
            next(
                new AppError(
                    "you must provide a password and confirm password "
                )
            );
        }
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err,
        });
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    //if there is password and email
    if ((!email, !password)) {
        return next(
            new AppError("please provide a valid email and password", 400)
        );
    }
    // if the user exists
    const user = await User.findOne({ email });

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!user || !isCorrectPassword) {
        return next(new AppError("incorrect password or email"), 401);
    }
    console.log(user);

    const token = generateToken(user._id);

    res.status(200).json({
        status: "success",
        token,
    });
};

exports.protect = async (req, res, next) => {
    next();
};
