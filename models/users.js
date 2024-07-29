const Mongoose = require("mongoose")
const userSchema = Mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phoneno: String,
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

var userModel = Mongoose.model("users", userSchema)
module.exports = userModel