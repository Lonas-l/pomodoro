const {Schema, model} = require('mongoose')


const Settings = new Schema({
    durationPomodoro: {type: String, unique: true, required: true},
})

module.exports = model('Settings', Settings)
