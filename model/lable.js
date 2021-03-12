const mongoose = require('mongoose')
const lable = new mongoose.Schema({
    lable: {
        type: String,
        unique: false, //唯一
        required: true //必须有
    },
   
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'create-time',
        updatedAt: 'update-time'
    }
}) //??
module.exports = mongoose.model('lable', lable)