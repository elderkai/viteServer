import{a as e,h as t}from"./index.0284dd6e.js";import{r as a}from"./toolFun.316408ce.js";import{f as l,a3 as o,a4 as i,r,o as d,c as s,a as c,O as n,x as u,I as p,a5 as m}from"./vendor.03d6fc96.js";const h={setup(){const{proxy:o}=p(),i=e();let r=l([]);function d(){o.$axios.get("/article").then((e=>{200==e.code&&(console.log(e.data),e.data.map((e=>e.updatedTime=a(e.updatedTime))),r.value=e.data)}))}return d(),{articles:r,delArticle:function(e){o.$axios.post("/article/remove",{_id:e._id}).then((e=>{200==e.code&&(d(),t.success({message:e.msg,type:"success"}))}))},editArticle:function(e){console.log(e),i.push({path:"/manage/editArticle",query:{id:e._id}})}}}},f=m();o("data-v-2060a91d");const w={class:"manageArticle"},b=n("修改"),x=n("删除");i();const g=f(((e,t,a,l,o,i)=>{const p=r("el-avatar"),m=r("el-table-column"),h=r("el-image"),g=r("el-button"),v=r("el-table");return d(),s("div",null,[c("div",w,[c(v,{data:l.articles,border:"",style:{width:"1200px"},"max-height":"600"},{default:f((()=>[c(m,{prop:"author",label:"作者",width:"120"},{default:f((t=>[c(p,{size:e.size,src:t.row.author?t.row.author.picUrl:""},null,8,["size","src"]),n(" "+u(t.row.author?t.row.author.username:""),1)])),_:1}),c(m,{prop:"title",label:"文章",width:"150"}),c(m,{prop:"introduce",label:"介绍",width:"150"}),c(m,{prop:"readnumber",label:"浏览量",width:"150"}),c(m,{prop:"commonnum",label:"评论",width:"150"}),c(m,{prop:"updatedTime",label:"创建时间",width:"160"}),c(m,{label:"图片"},{default:f((e=>[c("div",null,[c(h,{style:{width:"100px",height:"100px"},src:e.row.coverImg},null,8,["src"])])])),_:1}),c(m,{label:"操作"},{default:f((e=>[c("div",null,[c(g,{size:"mini",type:"text",onClick:t=>l.editArticle(e.row)},{default:f((()=>[b])),_:2},1032,["onClick"]),c(g,{size:"mini",type:"text",onClick:t=>l.delArticle(e.row)},{default:f((()=>[x])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])])])}));h.render=g,h.__scopeId="data-v-2060a91d";export default h;