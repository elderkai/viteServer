import{h as e}from"./index.91abfe61.js";import{r as a}from"./toolFun.df0161f1.js";import{f as t,a3 as s,a4 as l,r as o,o as r,c as d,a as i,O as p,x as c,I as n,a5 as u}from"./vendor.03d6fc96.js";const m={setup(){let s=t([]);const{proxy:l}=n();function o(){l.$axios.get("/getUsers").then((e=>{200==e.code&&(s.value=[],e.data.map((e=>e["update-time"]=a(e["update-time"]))),s.value=e.data)}))}return{tableData:s,getData:o,delUser:function(a){console.log(a._id),l.$axios.post("/user/remove",{_id:a._id}).then((a=>{200==a.code&&(o(),e.success({message:a.msg,type:"success"}))}))}}},created(){this.getData()}},f=u();s("data-v-4db9a34c");const b={class:"manage_user_table"},h=p("删除");l();const _=f(((e,a,t,s,l,n)=>{const u=o("el-table-column"),m=o("el-avatar"),_=o("el-button"),w=o("el-table");return r(),d("div",null,[i("div",b,[i(w,{data:s.tableData,border:"",style:{width:"1200px"},"max-height":"600"},{default:f((()=>[i(u,{fixed:"",prop:"username",label:"昵称",width:"150"}),i(u,{prop:"email",label:"邮箱",width:"300"}),i(u,{prop:"picUrl",label:"头像",width:"150"},{default:f((a=>[i(m,{size:e.size,src:a.row.picUrl},null,8,["size","src"])])),_:1}),i(u,{prop:"power",label:"权限",width:"120"},{default:f((e=>[p(c(1==e.row.power?"管理":"用户"),1)])),_:1}),i(u,{prop:"update-time",label:"创建时间",width:"300"}),i(u,{label:"操作"},{default:f((e=>[i(_,{size:"mini",type:"text",onClick:a=>s.delUser(e.row)},{default:f((()=>[h])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])])}));m.render=_,m.__scopeId="data-v-4db9a34c";export default m;
