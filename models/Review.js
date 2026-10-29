const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    reviewTital: {
        type: String
    },
    reviewBody: {
        type: String
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timeseries: true })

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review