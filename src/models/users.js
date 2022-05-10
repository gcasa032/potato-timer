const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

userSchema.methods.generateAuthToke = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" })
    return token
};

const User = mongoose.model("user", userSchema);