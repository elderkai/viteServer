import{r as e,u as s,a as o,b as a,$ as n,c as l,p as u,d as r,e as t,o as i,f as d,g as c,w as p,h as m,i as f}from"./index.f8f7fc4f.js";import"./vendor.521ca53b.js";const g={setup(u,r){s();const t=o(),i=a(),d=e({username:"",password:""});return{userInfo:d,login:function(){n.post("/manage/login",{username:d.username,password:d.password}).then((e=>{200==e.code&&(l.success({message:e.msg,type:"success"}),i.commit("CHANGE_manageInfo",e.data),console.log(i.state.manageInfo),t.push("/manage"))}))}}}},I=m("data-v-536b3347");u("data-v-536b3347");const _={id:"login"},v={class:"loginBox"},y=c("h2",null,"登录管理界面",-1),b={class:"loginItem"},h=c("i",{class:"el-input__icon el-icon-user-solid"},null,-1),w={class:"loginItem"},V=c("i",{class:"el-input__icon el-icon-s-goods"},null,-1),x=f("登录");r();const K=I(((e,s,o,a,n,l)=>{const u=t("el-input"),r=t("el-button");return i(),d("div",_,[c("div",v,[y,c("div",b,[c(u,{onKeyup:p(a.login,["enter"]),modelValue:a.userInfo.username,"onUpdate:modelValue":s[1]||(s[1]=e=>a.userInfo.username=e),placeholder:"请输入用户名"},{prefix:I((()=>[h])),_:1},8,["onKeyup","modelValue"])]),c("div",w,[c(u,{onKeyup:p(a.login,["enter"]),modelValue:a.userInfo.password,"onUpdate:modelValue":s[2]||(s[2]=e=>a.userInfo.password=e),placeholder:"请输入密码"},{prefix:I((()=>[V])),_:1},8,["onKeyup","modelValue"])]),c(r,{onClick:a.login,type:"primary"},{default:I((()=>[x])),_:1},8,["onClick"])])])}));g.render=K,g.__scopeId="data-v-536b3347";export default g;
