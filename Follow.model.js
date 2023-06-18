const mongoose = require('mongoose')

const schema = mongoose.Schema({
    //club
    email_followed: String,
    name_followed: String,
    img_followed: String,
    //user
    email_follow: String,
    name_follow: String,
    img_follow: String,

})

module.exports = mongoose.model('Suivre', schema)

