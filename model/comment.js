const mongoose = require('mongoose')
const Schema = mongoose.Schema
const comments=new mongoose.Schema({
    articleId:{
        type:Schema.Types.ObjectId,
        ref:'article'
    }, 
    content:{
        type:String,
        required:true},
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    commentId:{
        type:Schema.Types.ObjectId,
        ref:'comments'
    },
    follow:{
        type:String,
        default:null
    }
},{varsionKey:false,timestamps:{createdAt:'createdTime',updatedAt:'updatedTime'}})
module.exports=mongoose.model('comments',comments);