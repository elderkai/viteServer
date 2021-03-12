const mongoose =require("mongoose")
const Schema=mongoose.Schema
const article=new mongoose.Schema({
    title:{type:String,
        unique:false, //唯一
    required:true},
    content:String,
    introduce:String,
    coverImg:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    lable:{
        type:Schema.Types.ObjectId,
        ref:'lable'
    },
    readnumber:{
        type:Number,
        default:0
    },
    commonnum:{
        type:Number,
        default:0
    }
},{versionKey:false,timestamps:{createdAt:'createdTime',updatedAt:'updatedTime'}})
module.exports=mongoose.model("article",article)