const {Router} =require("express")
const router=Router()
const articleModel=require('../model/article')
const labModel =require('../model/lable')
const userModel =require('../model/user')
router.post("/article/add",async (req,res,next)=>{
    try{
           if(!req.session.userName){  
        res.json({
            code:201,
            msg:"未登录或登录已过期"
        })
     }else{
        const{content,introduce,coverImg,title,lable,author}=req.body
        console.log(req.body);
        const titleData=await articleModel.findOne({title});
        console.log(titleData);
        if(titleData!=null){
            throw "标题重复"
        }
        const data = await articleModel.create({
            title,
            content,
            lable,
            introduce,coverImg,
            author})
            res.json({
                code:200,
                msg:'发布成功!',
                data:data
            })
     }
    }
    catch(err){
        res.json({
            code:400,
            msg:err
        })
    }
})
router.post('/article/rewrite',async (req,res,next)=>{
    try{
           if(!req.session.userName){  
        res.json({
            code:201,
            msg:"未登录或登录已过期"
        })
     }else{
        const{content,contentText,introduce,coverImg,title,lable,author,_id}=req.body
        const artData=await articleModel.findOne({_id});
        if(_id==''||artData==null){
            throw "文章不存在"
        }else{
           const data = await articleModel.updateOne({
            _id
        }, {
            content,contentText,title,lable,author,introduce,coverImg,
        })
        console.log(data);
            res.json({
                code:200,
                msg:"修改成功",
            })
        
        }
     }
    }
    catch(err){
        res.json({
            code:400,
            msg:err
        })
    }
})
router.get('/article',async (req,res)=>{

    let{pn=1,size=10,author}=req.query
    let  total='';
    console.log(author)
    pn=parseInt(pn)
    size=parseInt(size)
    await articleModel.find().count().then(data=>{
     total=data
})
   await  articleModel.find()
    .skip((pn-1)*size)
    .limit(size)
    .sort({_id:-1})
    .populate({
        path:'author',
        select:'-password -email'
    })
    .populate({
        path:'lable',
    })
    .then(data=>{
        res.json({
            code:200,
            data,
            total
        })
    })
})
router.get('/article/:id',async (req,res)=>{
 
    const{id}=req.params
        await  articleModel.findById(id)
    .populate({
        path:'author',
        select:'-password -email'
    })
    .populate({
        path:'lable'
    })
    .then(data=>{
        res.json({
            code:200,
            data
        })
    })
})
router.post('/article/remove', async (req, res, next) => {
    const {
        _id
    } = req.body;
    try {
           if(!req.session.userName){  
        res.json({
            code:201,
            msg:"未登录或登录已过期"
        })
     }else{
        articleModel.deleteOne({
            _id
        }, (err, end) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: '系统错误',
                    err
                })
            } else {
                if (end.deletedCount) {
                    res.json({
                        code: 200,
                        msg: "删除成功！"
                    })
                } else {
                    res.json({
                        code: 400,
                        msg: "文章不存在"
                    })
                }
            }
        })
     }
    } catch (err) {
        res.json({
            code: 400,
            msg: err
        })
    }
})
module.exports=router;