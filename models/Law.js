
const mongoose = require('mongoose')

const lawSchema = new mongoose.Schema({
    title : { type: String, required: true },
    section: { type: String, required: true },
    description: { type: String, required: true },
    punishment: { type: String, required: true},
})

module.exports = mongoose.model('Law', lawSchema)