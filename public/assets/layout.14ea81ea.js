import{f as e,d as a,p as s,k as o,a3 as l,a4 as t,r as n,o as r,c as i,a as u,x as c,E as d,M as p,Q as m,I as v,a5 as g,O as f}from"./vendor.03d6fc96.js";import{u as h,a as w,b,h as k}from"./index.ee1e04b3.js";import{_}from"./upPicture.1cee9c0e.js";import"./toolFun.51184dd8.js";const C={components:{upPicture:_},props:{},setup(l,t){const{proxy:n,ctx:r}=v(),i=h(),u=w(),c=b();let d=e({username:"",password:"",email:"",picUrl:"",power:0}),p=e(!1),m=e(!1),g=e(!1),f=a({username:"",picUrl:"",_id:"",email:""});f.username=c.state.userInfo.username,f.picUrl=c.state.userInfo.picUrl,f._id=c.state.userInfo._id,f.email=c.state.userInfo.email;let _=e("");s("coverPic",_);const C=a({value1:0});return o((()=>{!function(){let e=i.path,a=document.getElementsByClassName("nav-item");for(var s=0;s<a.length;s++)a[s].style.color="#71777c";switch(e){case"/":a[0].style.color="rgb(64, 158, 255)",C.value1=0;break;case"/timeSort":a[1].style.color="rgb(64, 158, 255)",C.value1=1;break;case"/project":a[2].style.color="rgb(64, 158, 255)",C.value1=2;break;case"/course":a[3].style.color="rgb(64, 158, 255)",C.value1=3;break;case"/message":a[4].style.color="rgb(64, 158, 255)",C.value1=4;break;case"/about":a[5].style.color="rgb(64, 158, 255)",C.value1=5}}()})),{navGo:function(e){let a=document.getElementsByClassName("nav-item");for(var s=0;s<a.length;s++)a[s].style.color="#71777c";e.target.style.color="rgb(64, 158, 255)","首页"==e.target.innerHTML?u.push("/home"):"文章"==e.target.innerHTML?u.push("/"):"归档"==e.target.innerHTML?u.push("/timeSort"):"项目"==e.target.innerHTML?u.push("/project"):"历程"==e.target.innerHTML?u.push("/course"):"留言"==e.target.innerHTML?u.push("/message"):"关于"==e.target.innerHTML&&u.push("/about")},showRegister:p,userInfo:d,register:function(){d.picUrl=_.value;const{username:e,password:a,power:s,email:o}=d.value;m.value?n.$axios.post("/login",{username:e,password:a}).then((e=>{200==e.code&&(m.value=!1,p.value=!1,f.username=e.data.username,f.picUrl=e.data.picUrl,f._id=e.data._id,f.email=e.data.email,c.commit("CHANGE_userInfo",f),k.success({message:e.msg,type:"success"}))})):n.$axios.post("/register",{username:e,password:a,power:s,email:o}).then((e=>{200==e.code&&(p.value=!1,k.success({message:e.msg,type:"success"}),d.value.username="",d.value.password="",d.value.email="",d.value.picUrl="",c.commit("CHANGE_userInfo",d.value))}))},showLogin:m,loginInfo:f,logout:function(){n.$axios.post("logout").then((e=>{200==e.code&&(k.success({message:e.msg}),f._id="",f.username="",f.picUrl="https://blog-1256024584.cos.ap-nanjing.myqcloud.com/12312.png",c.commit("CHANGE_userInfo",f))}))},showUpPic:g,upPic:function(){n.$axios.post("/user/updata",{picUrl:_.value,username:f.username,email:f.email,power:0,_id:f._id}).then((e=>{200==e.code&&(g.value=!1,f.picUrl=_.value,c.commit("CHANGE_userInfo",f),k.success({message:e.msg}))}))},state:C,option1:[{text:"文章",value:1},{text:"归档",value:2},{text:"项目",value:3},{text:"历程",value:4},{text:"留言",value:5},{text:"关于",value:6}],mobleMenu:function(e){switch(e){case 1:u.push("/");break;case 2:u.push("/timeSort");break;case 3:u.push("/project");break;case 4:u.push("/course");break;case 5:u.push("/message");break;case 6:u.push("/about")}}}}},y=g();l("data-v-340b5674");const x={class:"headerBox"},I={class:"grid-content bg-purple-dark"},U={class:"headerCenter"},V=u("div",{class:"logo"},[u("div",{class:"text-magic","data-word":"zkblog"},[u("div",{class:"white"})])],-1),G={class:"nav-box"},L={key:0,class:"login-btns"},H=f("登录"),M=f("注册"),P={key:1},j={class:"userInfo_box"},N={class:"el-dropdown-link"},E={class:"userName"},T=f("上传头像"),R=f("退出登录"),A={class:"form_register"},$={class:"userName"},B=f(" 用户名：   "),S={class:"email"},K=f(" 邮箱：      "),q={class:"password"},z=f(" 密码：      "),F={class:"dialog-footer"},O=f("取 消"),Q=f("确 定"),D={class:"form_register"},J={class:"password"},W=f(" 头像：            "),X={class:"dialog-footer"},Y=f("取 消"),Z=f("确 定");t();const ee=y(((e,a,s,o,l,t)=>{const v=n("el-button"),g=n("el-avatar"),f=n("el-dropdown-item"),h=n("el-dropdown-menu"),w=n("el-dropdown"),b=n("van-dropdown-item"),k=n("van-dropdown-menu"),_=n("el-col"),C=n("el-input"),ee=n("el-dialog"),ae=n("up-picture");return r(),i("div",x,[u(_,{span:60},{default:y((()=>[u("div",I,[u("div",U,[V,u("div",G,[u("div",{onClick:a[1]||(a[1]=(...e)=>o.navGo&&o.navGo(...e)),class:"nav-item checked"},"文章"),u("div",{onClick:a[2]||(a[2]=(...e)=>o.navGo&&o.navGo(...e)),class:"nav-item"},"归档"),u("div",{onClick:a[3]||(a[3]=(...e)=>o.navGo&&o.navGo(...e)),class:"nav-item"},"项目"),u("div",{onClick:a[4]||(a[4]=(...e)=>o.navGo&&o.navGo(...e)),class:"nav-item"},"历程"),u("div",{onClick:a[5]||(a[5]=(...e)=>o.navGo&&o.navGo(...e)),class:"nav-item"},"留言"),u("div",{onClick:a[6]||(a[6]=(...e)=>o.navGo&&o.navGo(...e)),class:"nav-item"},"关于")]),o.loginInfo.username?(r(),i("div",P,[u("div",j,[u(w,null,{dropdown:y((()=>[u(h,null,{default:y((()=>[u(f,{onClick:a[9]||(a[9]=e=>o.showUpPic=!0)},{default:y((()=>[T])),_:1}),u(f,{onClick:o.logout},{default:y((()=>[R])),_:1},8,["onClick"])])),_:1})])),default:y((()=>[u("span",N,[u(g,{src:o.loginInfo.picUrl},null,8,["src"]),u("p",E,c(o.loginInfo.username),1)])])),_:1})])])):(r(),i("div",L,[u(v,{onClick:a[7]||(a[7]=e=>{o.showLogin=!0,o.showRegister=!0}),type:"text"},{default:y((()=>[H])),_:1}),u(v,{onClick:a[8]||(a[8]=e=>{o.showRegister=!0,o.showLogin=!1}),type:"text"},{default:y((()=>[M])),_:1})])),u(k,null,{default:y((()=>[u(b,{onChange:o.mobleMenu,modelValue:o.state.value1,"onUpdate:modelValue":a[10]||(a[10]=e=>o.state.value1=e),options:o.option1},null,8,["onChange","modelValue","options"])])),_:1})])])])),_:1}),u(ee,{title:o.showLogin?"登录":"注册",modelValue:o.showRegister,"onUpdate:modelValue":a[15]||(a[15]=e=>o.showRegister=e),width:"350px"},{footer:y((()=>[u("span",F,[u(v,{onClick:a[14]||(a[14]=e=>o.showRegister=!1)},{default:y((()=>[O])),_:1}),u(v,{type:"primary",onClick:o.register},{default:y((()=>[Q])),_:1},8,["onClick"])])])),default:y((()=>[u("div",A,[u("div",$,[B,u(C,{modelValue:o.userInfo.username,"onUpdate:modelValue":a[11]||(a[11]=e=>o.userInfo.username=e),placeholder:"请输入用户名"},null,8,["modelValue"])]),d(u("div",S,[K,u(C,{modelValue:o.userInfo.email,"onUpdate:modelValue":a[12]||(a[12]=e=>o.userInfo.email=e),placeholder:"请输入邮箱"},null,8,["modelValue"])],512),[[p,!o.showLogin]]),u("div",q,[z,u(C,{modelValue:o.userInfo.password,"onUpdate:modelValue":a[13]||(a[13]=e=>o.userInfo.password=e),onKeyup:m(o.register,["enter"]),placeholder:"请输入密码"},null,8,["modelValue","onKeyup"])])])])),_:1},8,["title","modelValue"]),u(ee,{title:"上传头像",modelValue:o.showUpPic,"onUpdate:modelValue":a[17]||(a[17]=e=>o.showUpPic=e),width:"420px"},{footer:y((()=>[u("span",X,[u(v,{onClick:a[16]||(a[16]=e=>o.showUpPic=!1)},{default:y((()=>[Y])),_:1}),u(v,{type:"primary",onClick:o.upPic},{default:y((()=>[Z])),_:1},8,["onClick"])])])),default:y((()=>[u("div",D,[u("div",J,[W,u(ae)])])])),_:1},8,["modelValue"])])}));C.render=ee,C.__scopeId="data-v-340b5674";const ae={components:{headerComp:C},setup:()=>({})},se=g()(((e,a,s,o,l,t)=>{const c=n("header-comp"),d=n("router-view");return r(),i("div",null,[u(c),u(d)])}));ae.render=se,ae.__scopeId="data-v-7fdcdcb2";export default ae;
