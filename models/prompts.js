const mongoose = require('mongoose')

const promptSchema = new mongoose.Schema({
   prompt: String
})
const Prompts = mongoose.model('Prompts', promptSchema)

module.exports = Prompts