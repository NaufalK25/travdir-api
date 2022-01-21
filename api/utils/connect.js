const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/travdir",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (!err) {
            console.log("MongoDB Connection Succeeded.");
        } else {
            console.log("Error on DB connection: " + err);
        }
    }
);
