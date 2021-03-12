const {
    Router
} = require("express")
const {
    model
} = require("../config/config")
const router = Router()
const lableModel = require('../model/lable')
router.post("/lable/create", async (req, res, next) => {
    try {
        const {
            lable
        } = req.body
   if(!req.session.userName){  
        res.json({
            code:201,
            msg:"未登录或登录已过期"
        })
     }else{
        const data = await lableModel.create({
            lable
        })

        res.json({
            code: 200,
            msg: "创建成功！",
            data
        })
     }
    } catch (err) {
        if (err.keyPattern) {
            res.json({
                code: 400,
                msg: "标签重复！"
            })
        }
        res.json({
            code: 400,
            msg: err
        })
    }
})
router.get('/lable/getLables', async (req, res, next) => {
    try {
        let total = "";
           if(!req.session.userName){  
        res.json({
            code:201,
            msg:"未登录或登录已过期"
        })
     }else{
        lableModel.find().countDocuments().then(data => {
            total = data;
        })
        lableModel.find().then(data => {
            res.json({
                code: 200,
                total,
                data
            })
        })
     }
    } catch (err) {
        res.json({
            code: 400,
            msg: '系统异常！'
        })
    }
})
router.post('/lable/remove', async (req, res, next) => {
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
        lableModel.deleteOne({
            _id
        }, (err, end) => {
            console.log(err, end);
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
                        code: 200,
                        msg: "标签不存在"
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
router.post('/lable/change',async (req,res,next)=>{
    const {lable,_id}=req.body;
    try{
           if(!req.session.userName){  
        res.json({
            code:201,
            msg:"未登录或登录已过期"
        })
     }else{
        const lableData=await lableModel.findOne({_id});
        if(lableData==null){
            throw "参数错误"
        }else{
            console.log({lable});
            const data=await lableData.updateOne({_id},{lable});
            res.json({
                code:200,
                msg:"修改成功！",
                data
            })
        }
     }
    }catch(err){
        res.json({
            code:400,
            msg:err
        })
    }
})
module.exports = router