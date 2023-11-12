const {Schema, model} = require('mongoose')


const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}],
    settings: {
        durationPomodoro: {type: String},
        shortBreakDuration: {type: String},
        longBreakDuration: {type: String},
        isAutoStartBreaks: {type: Boolean},
        isAutoStartPomodoro: {type: Boolean},
        isSoundEnabled: {type: Boolean},
        isRain: {type: Boolean},
        breakInterval: {type: String},
    }
})

module.exports = model('User', User)
