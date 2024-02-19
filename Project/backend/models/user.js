const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    firstname: String,
    lastName: String,
    city: String,
    company: String
});

module.exports = mongoose.model("Data", userSchema);
