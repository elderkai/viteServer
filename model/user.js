const mongoose = require('mongoose')
const user = new mongoose.Schema({
    username: {
        type: String,
        unique: true, //唯一
        required: true //必须有
    },
    picUrl: {
        type: String,
        default: "https://blog-1256024584.cos.ap-nanjing.myqcloud.com/12312.png"
    },
    email: {
        type: String,
        unique: true, //唯一
        required: true //必须有
    },
    power: {
        type: Boolean,
        default: 0 //设置默认值

    },
    password: String,
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'create-time',
        updatedAt: 'update-time'
    }
}) //??
module.exports = mongoose.model('user', user)