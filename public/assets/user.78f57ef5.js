import{j as e,c as a,p as t,d as s,e as l,o,f as d,g as r,i,t as c,n as p,h as n}from"./index.f8f7fc4f.js";import{r as u}from"./toolFun.fa8e1713.js";import"./vendor.521ca53b.js";const m={setup(){let t=e([]);const{proxy:s}=p();function l(){s.$axios.get("/getUsers").then((e=>{200==e.code&&(t.value=[],e.data.map((e=>e["update-time"]=u(e["update-time"]))),t.value=e.data)}))}return{tableData:t,getData:l,delUser:function(e){console.log(e._id),s.$axios.post("/user/remove",{_id:e._id}).then((e=>{200==e.code&&(l(),a.success({message:e.msg,type:"success"}))}))}}},created(){this.getData()}},b=n("data-v-4db9a34c");t("data-v-4db9a34c");const f={class:"manage_user_table"},h=i("删除");s();const _=b(((e,a,t,s,p,n)=>{const u=l("el-table-column"),m=l("el-avatar"),_=l("el-button"),w=l("el-table");return o(),d("div",null,[r("div",f,[r(w,{data:s.tableData,border:"",style:{width:"1200px"},"max-height":"600"},{default:b((()=>[r(u,{fixed:"",prop:"username",label:"昵称",width:"150"}),r(u,{prop:"email",label:"邮箱",width:"300"}),r(u,{prop:"picUrl",label:"头像",width:"150"},{default:b((a=>[r(m,{size:e.size,src:a.row.picUrl},null,8,["size","src"])])),_:1}),r(u,{prop:"power",label:"权限",width:"120"},{default:b((e=>[i(c(1==e.row.power?"管理":"用户"),1)])),_:1}),r(u,{prop:"update-time",label:"创建时间",width:"300"}),r(u,{label:"操作"},{default:b((e=>[r(_,{size:"mini",type:"text",onClick:a=>s.delUser(e.row)},{default:b((()=>[h])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])])}));m.render=_,m.__scopeId="data-v-4db9a34c";export default m;