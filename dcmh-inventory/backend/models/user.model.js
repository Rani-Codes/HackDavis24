const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please enter a username of item."]
    },

    password: {
        type: String,
        required: [true, "Please enter a password."],
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User;
