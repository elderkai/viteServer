import{f as e,a3 as a,a4 as l,r as t,o,c as s,a as d,E as n,M as u,I as c,a5 as i,O as b}from"./vendor.03d6fc96.js";import{r as p}from"./toolFun.e82c1115.js";import{h as r}from"./index.a6ba2636.js";const m={setup(){const{proxy:a}=c();let l=e([]),t=e(""),o=e(!1);function s(){a.$axios.get("/lable/getLables").then((e=>{200==e.code&&(l.value=[],e.data.map((e=>e["update-time"]=p(e["update-time"]))),l.value=e.data)}))}return s(),{lables:l,delLable:function(e){a.$axios.post("/lable/remove",{_id:e._id}).then((e=>{200==e.code&&(r.success({message:e.msg,type:"success"}),s())}))},upLable:function(e){a.$axios.post("/lable/change",{_id:e._id,lable:e.lable}).then((e=>{200==e.code&&(r.success({message:e.msg,type:"success"}),s())}))},lable:t,addLable:function(){a.$axios.post("/lable/create",{lable:t.value}).then((e=>{200==e.code&&(o.value=!1,t.value="",s())}))},showAdd:function(){o.value=!o.value},show:o}}},h=i();a("data-v-54cb1334");const f={class:"addBtn"},v=b("添加"),g={class:"inputAdd"},x={class:"tableBox"},w=b("删除");l();const _=h(((e,a,l,c,i,b)=>{const p=t("el-button"),r=t("el-input"),m=t("el-table-column"),_=t("el-table");return o(),s("div",null,[d("div",f,[d(p,{onClick:c.showAdd,type:"text"},{default:h((()=>[v])),_:1},8,["onClick"]),d("div",g,[n(d(r,{placeholder:"添加标签",onChange:c.addLable,modelValue:c.lable,"onUpdate:modelValue":a[1]||(a[1]=e=>c.lable=e)},null,8,["onChange","modelValue"]),[[u,c.show]])])]),d("div",x,[d(_,{data:c.lables,border:"",style:{width:"600px"},"max-height":"600"},{default:h((()=>[d(m,{prop:"lable",label:"标签",width:"120"},{default:h((e=>[d(r,{onChange:a=>c.upLable(e.row),modelValue:e.row.lable,"onUpdate:modelValue":a=>e.row.lable=a,placeholder:"请输入内容"},null,8,["onChange","modelValue","onUpdate:modelValue"])])),_:1}),d(m,{prop:"update-time",label:"创建时间",width:"300"}),d(m,{label:"操作"},{default:h((e=>[d(p,{size:"mini",type:"text",onClick:a=>c.delLable(e.row)},{default:h((()=>[w])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])])}));m.render=_,m.__scopeId="data-v-54cb1334";export default m;
