const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.createConnection(process.env.DB, connectionParams)
        console.log("Connected to database successfully")
    } catch (error) {
        console.log(error)
        console.log(process.env.DB)
        console.log("Could not connect to database")
    }
}