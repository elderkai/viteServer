import{b as e,h as t,u as s}from"./index.85785c78.js";import{a3 as a,a4 as n,f as c,i as l,k as o,r,o as d,c as i,a as m,x as u,m as p,O as f,v,E as h,M as y,Q as I,F as _,J as g,I as w,a5 as x,d as C,p as $}from"./vendor.03d6fc96.js";import{r as T,h as b}from"./toolFun.1f5dddd9.js";const k={name:"commentItem",props:{data:{type:Object}},components:{},setup(s,a){const{proxy:n}=w(),r=e();let d=s.data,i=c(!1),m=l("success");var u=n;o((()=>{document.addEventListener("click",(e=>{1==i.value&&(u.$refs.input.contains(e.target)||(i.value=!1))}))}));let p=c("");return{item:d,replay:p,show:i,upComment:function(){let e=d._id,s=d.user.username,a=e;null!=d.follow&&(a=d.follow),n.$axios.post("addComment",{articleId:d.articleId,replayName:s,content:p.value,user:r.state.userInfo._id,commentId:e,follow:a}).then((e=>{200==e.code&&(p.value="",i.value=!1,m(),t.success({message:e.msg}))}))}}}},E=x();a("data-v-20103b22");const V={class:"header"},j={class:"right"},K={key:0,class:"replayCont"},U={class:"bottom_comment"},A={class:"time"},L=m("img",{src:"/assets/comment.ff7f8d59.png",class:"btnIcon",alt:""},null,-1),M=f(" 回复 "),N={class:"replay",ref:"input"},P={class:"children"};n();const q=E(((e,t,s,a,n,c)=>{const l=r("el-input"),o=r("comment-item",!0);return d(),i("div",null,[m("div",V,[m("img",{class:"userAvator",src:a.item.user.picUrl,alt:"",srcset:""},null,8,["src"]),m("div",j,[m("p",null,u(a.item.user.username),1),m("p",null,[a.item.replayName?(d(),i("span",K,u("回复 "+a.item.replayName+":"),1)):p("",!0),f(u(a.item.content),1)])])]),m("div",U,[m("div",A,u(a.item.howTime),1),m("div",{class:"huifu",onClick:t[1]||(t[1]=v((e=>a.show=!a.show),["stop"]))},[L,M])]),m("div",N,[h(m(l,{placeholder:"回复"+a.item.user.username+"...",onKeyup:I(a.upComment,["enter"]),modelValue:a.replay,"onUpdate:modelValue":t[2]||(t[2]=e=>a.replay=e)},null,8,["placeholder","onKeyup","modelValue"]),[[y,a.show]])],512),m("div",P,[(d(!0),i(_,null,g(a.item.children,(e=>(d(),i(o,{key:e._id,data:e},null,8,["data"])))),128))])])}));k.render=q,k.__scopeId="data-v-20103b22";const F={components:{commentItem:k},setup(){let s=l("_id");const a=e(),n=a.state.userInfo,{proxy:o}=w(),r=c("");let d=C([]);function i(){o.$axios.get(`/getComment?articleId=${s}`).then((e=>{if(200==e.code){e.data.forEach((e=>{e.updatedTime=T(e.updatedTime),e.howTime=b(e.updatedTime)})),e.data.filter((e=>null==e.follow)).forEach((e=>{-1==d.findIndex((t=>t._id==e._id))&&d.push(e)})),d.forEach((t=>{null==t.children&&(t.children=C([])),e.data.forEach((e=>{t._id==e.follow&&-1==t.children.findIndex((t=>t._id==e._id))&&(t.children[t.children.length]=e,t.children=t.children)}))}))}}))}function m(e){i()}return i(),$("success",m),{userInfo:n,comment:r,upComment:function(){o.$axios.post("addComment",{articleId:s,content:r.value,user:a.state.userInfo._id,follow:null}).then((e=>{200==e.code&&(r.value="",t.success({message:e.msg}),i())}))},comments:d,success:m}}},H=x();a("data-v-36df551f");const O={class:"commentArticle"},J={class:"comments"};n();const Q=H(((e,t,s,a,n,c)=>{const l=r("el-input"),o=r("comment-item");return d(),i("div",null,[m("div",O,[m("img",{class:"userAvator",src:e.$store.state.userInfo.picUrl,alt:"",srcset:""},null,8,["src"]),m(l,{placeholder:"输入评论...",onKeyup:I(a.upComment,["enter"]),modelValue:a.comment,"onUpdate:modelValue":t[1]||(t[1]=e=>a.comment=e)},null,8,["onKeyup","modelValue"])]),m("div",J,[(d(!0),i(_,null,g(a.comments,(e=>(d(),i("div",{key:e._id,class:"comment"},[m(o,{success:a.success,data:e},null,8,["success","data"])])))),128))])])}));F.render=Q,F.__scopeId="data-v-36df551f";const z={components:{artComment:F},setup(){const e=s(),t=e.query.id,{proxy:a}=w();let n=C({title:"",introduce:"",coverPic:"",content:""});return $("_id",t),e.query.id&&a.$axios.get(`/article/${t}`).then((e=>{200==e.code&&(n.title=e.data.title,n.introduce=e.data.introduce,n.coverPic=e.data.coverImg,n.content=e.data.content)})),{article:n}}},B=x();a("data-v-710f56e8");const D={class:"article"},G={class:"instroduce"};n();const R=B(((e,t,s,a,n,c)=>{const l=r("art-comment");return d(),i("div",D,[m("h2",null,u(a.article.title),1),m("p",G,u(a.article.introduce),1),m("img",{src:a.article.coverPic,alt:"",class:"coverImg"},null,8,["src"]),m("div",{innerHTML:a.article.content},null,8,["innerHTML"]),m(l)])}));z.render=R,z.__scopeId="data-v-710f56e8";export default z;
