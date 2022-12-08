const mongoose = require('mongoose')

const carelySchema = new mongoose.Schema({
    date: String,
    title: String,
    entry: String,
    breath: Boolean,
    body: Boolean,
    breaks: Boolean,
    grace: Boolean,
    thoughts: Boolean,
    connect: Boolean,
    wins: Boolean,
    help: Boolean,
    moment: Boolean,
})
const Journal = mongoose.model('Journal', carelySchema)

module.exports = Journal