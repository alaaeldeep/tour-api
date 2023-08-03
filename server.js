const mongoose = require("mongoose");

const app = require("./app");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

// Connect MongoDB at default port 27017.=> then run the server
mongoose.connect(process.env.CONNECTION_STRING).then(
    app.listen(process.env.PORT, () => {
        console.log(`listening on ${port}....`);
    })
);
