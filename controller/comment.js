const {Router}=require("express")
const router=Router()
const Comment=require('../model/comment')
router.post('/apis/addComment',async (req,res,next)=>{
    const {articleId,content,user,commentId,replayName,follow}=req.body;
        try{
               if(!req.session.userName){  
        res.json({
            code:202,
            msg:"未登录或登录已过期"
        })
     }else{
            if(content!=null){
                const data=Comment.create({articleId,content,user,commentId,replayName,follow})
                res.json({
                    code:"200",
                    msg:'评论发表成功'
                })
            }else{
                res.json({
                    code:400,
                    msg:'缺少评论内容'
                })
            }
     }
        }catch(err){
            res.json({
                code:400,
                msg:'评论失败'
            })
        }


})
router.get('/apis/getComment',(req,res,next)=>{
const {pn=1,size=10,articleId=""}=req.query
let total='';

Comment.find().count().then(data=>{
    total=data
})
Comment.find({articleId})
// .skip((pn-1)*size)
// .limit(size)
.sort({_id:1})
.populate({
    path:'user',
    select:'-password -email'
})

// .populate({
//     path:'article',
//     select:'-content -contentText'
// })
.then(data=>{
    res.json({
        code:200,
        msg:'success',
        total,
        data
    })
})
})
module.exports=router