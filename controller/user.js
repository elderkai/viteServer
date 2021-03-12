const {
    Router
} = require("express")
const router = Router()
const userModel = require('../model/user')

function checkEmail(value) {
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    if (value === "") { //输入不能为空
        return false;
    } else if (!reg.test(value)) { //正则验证不通过，格式不对
        return false;
    } else {
        return true;
    }
}
router.post('/register', async (req, res, next) => {
    try {
        const {
            username,
            password,
            email,
            picUrl = 'https://blog-1256024584.cos.ap-nanjing.myqcloud.com/12312.png',
            power = 0
        } = req.body
        const userData = await userModel.findOne({
            username
        })
        const emailData = await userModel.findOne({
            email
        })
        if (!checkEmail(email)) {
            throw "邮箱格式错误"
        }
        if (password && password.length >= 5) {
            const data = await userModel.create({
                username,
                password,
                email,
                picUrl,
                power
            })
            if (data.keyPattern && data.keyPattern.email) {
                throw "邮箱已被注册"
            } else if (data.keyPattern && data.keyPattern.username) {
                throw "用户名已存在"
            } else {
                res.json({
                    code: 200,
                    msg: "注册成功！",
                    data
                })
            }
        } else {
            throw "密码长度不符合要求"
        }
    } catch (err) {
        if (err.keyPattern && err.keyPattern.email) {
            res.json({
                code: 400,
                msg: "邮箱已被注册！",

            })
        } else if (err.keyPattern && err.keyPattern.username) {
            res.json({
                code: 400,
                msg: "用户名已存在！"
            })
        } else {
            res.json({
                code: 400,
                msg: err,
                err: err
            })
        }
    }
})
router.post('/user/remove', async (req, res, next) => {
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
        userModel.deleteOne({
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
                        msg: "用户不存在"
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
router.post('/user/updata', async (req, res, next) => {
    const {
        username,
        password,
        power,
        email,
        _id,
        picUrl
    } = req.body
       if(!req.session.userName){  
        res.json({
            code:201,
            msg:"未登录或登录已过期"
        })
     }else{
    const typeData = await userModel.findOne({
        _id
    })
    if(password==''){password=typeData.password}
    if (typeData != null) {
        const data = await userModel.updateOne({
            _id
        }, {
            username,
            picUrl,
            email,
            power
        })
        res.json({
            code: 200,
            msg: "修改成功！",
            data
        })
    } else {
        res.json({
            msg: "系统错误",
            code: "400"
        })
    }
     }
})
router.post("/logout", async (req, res) => {
    req.session.userName = "";
    res.json({
        code: 200,
        msg: "退出登录成功！"
    })
})
router.post('/login', async (req, res, next) => {
    try {
        const {
            username,
            password,
            email
        } = req.body;
        const userData = await userModel.findOne({
            username
        }) || await userModel.findOne({
            email
        })
        if (userData == null) {
            throw "用户不存在"
        } else {
            if (password && password == userData.password) {
                userData.password = '';
                req.session.userName = username;
                res.json({
                    code: 200,
                    msg: "登录成功！",
                    data: userData
                })
            } else {
                throw "密码错误"
            }
        }
    } catch (err) {
        res.json({
            code: 400,
            msg: err
        })
    }
})
router.get('/getUsers',async (req,res)=>{
    let{pn=1,size=10}=req.query
    let  total='';
    pn=parseInt(pn)
    size=parseInt(size)
    if(!req.session.userName){  
        res.json({
            code:201,
            msg:"未登录或登录已过期"
        })
     }else{
    await userModel.find().count().then(data=>{
     total=data
})
   await  userModel.find({},{'password':0})
    .skip((pn-1)*size)
    .limit(size)
    .sort({_id:-1})
 
    .then(data=>{
        res.json({
            code:200,
            data,
            total
        })
    })
     }
})
router.post('/manage/login', async (req, res, next) => {
    try {
        const {
            username,
            password,
            email
        } = req.body;
        const userData = await userModel.findOne({
            username
        }) || await userModel.findOne({
            email
        })
        if (userData == null) {
            throw "用户不存在"
        } else {
            if (password && password == userData.password) {
                userData.password = '';
                req.session.username = username;
                if(!userData.power){
                    throw "该用户没有访问权限"
                }
                else{
                     req.session.userName = username;
                res.json({
                    code: 200,
                    msg: "登录成功！",
                    data: userData
                })
                }
            } else {
                throw "密码错误"
            }
        }
    } catch (err) {
        res.json({
            code: 400,
            msg: err
        })
    }
})
module.exports = router