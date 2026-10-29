const mongoose = require("mongoose")
const Category = require("./Category")

const listingSchema = new mongoose.Schema({
    streetAddress: {
        type: String
    },
    city: {
        type: String
    },
    price: {
        type: Number
    },
    size: {
        type: String
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
     category: {
        type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
          unique: true
    }
}, { timeseries: true })

const Listing = mongoose.model("Listing", listingSchema)

module.exports = Listing