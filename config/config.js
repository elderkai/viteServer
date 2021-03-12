const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true
})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connect success!')
})
module.exports = db