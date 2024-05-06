const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id:{
        type: Number,
    },
    name: {
        type: String,
    }
})

module.exports = mongoose.model("counterusers", schema)