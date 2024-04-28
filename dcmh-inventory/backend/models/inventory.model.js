const mongoose = require('mongoose')

const inventorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name of item."]
    },

    currentAmount: {
        type: Number,
        required: [true, "How much do you CURRENTLY have of this item?"],
        default: 0
    },

    goalAmount: {
        type: Number,
        required: [true, "How much do you WANT have of this item?"]
    }
})

const Inventory = mongoose.model("Inventory", inventorySchema)