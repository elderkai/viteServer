import{a as e}from"./index.ee1e04b3.js";import{h as s}from"./toolFun.51184dd8.js";import{d as a,w as l,i as t,a3 as c,a4 as i,Z as n,o as r,c as o,a as d,E as h,F as u,J as f,x as m,I as p,a5 as g}from"./vendor.03d6fc96.js";const b={setup(){const{proxy:c}=p();let i=a([]),n=[],r=e();const o=t("lableId");function d(e=1,a=10,l=111){c.$axios.get(`/article?pn=${e}&&size=${a}`).then((e=>{200==e.code&&e.data.forEach((e=>{e.howTime=s(e.updatedTime),-1==i.findIndex((s=>s._id==e._id))&&(e.lable._id!=l&&e.lable._id!=l.value&&111!=l||(i.push(e),n.push(e)))}))}))}return l(o,((e,s)=>{i.splice(0,i.length),d(1,10,o)})),d(),{articles:i,load:function(){let e=111;o.value&&(e=o.value),i.length%2>0||d(i.length/2+1,2,e)},clickSearch:function(e){let s=e.target.innerHTML;if("最新"==s){i.splice(0,i.length),n.sort(((e,s)=>s.updatedTime-e.updatedTime)).forEach((e=>{i.push(e)}))}else if("热门"==s){i.splice(0,i.length),n.sort(((e,s)=>s.commonnum-e.commonnum)).forEach((e=>{i.push(e)}))}else if("浏览"==s){i.splice(0,i.length),n.sort(((e,s)=>s.readnumber-e.readnumber)).forEach((e=>{i.push(e)}))}console.log(i);for(var a=0;a<c.$refs.selectBox.children.length;a++)c.$refs.selectBox.children[a].className=c.$refs.selectBox.children[a].className.split(" tabSelect").join("");e.target.className=e.target.className+" tabSelect"},goDetail:function(e){r.push({path:"/article",query:{id:e._id}})}}}},v=g();c("data-v-faf93c76");const k={class:"left"},x={ref:"selectBox",class:"searchBox"},I={class:"articles"},T={class:"infinite-list","infinite-scroll-distance":"200",style:{overflow:"auto"}},w={class:"user"},S={class:"title"},_={class:"introduce"},$={class:"btnArticle"},B={class:"talk"},E=d("img",{width:"14",height:"14",class:"btnIcon talkIcon",src:"/assets/talkb.f2153f3b.png",alt:""},null,-1),j={class:"see"},y=d("img",{width:"16",height:"16",class:"btnIcon",src:"/assets/seeb.e65b5f82.png",alt:""},null,-1);i();const C=v(((e,s,a,l,t,c)=>{const i=n("infinite-scroll");return r(),o("div",null,[d("div",k,[d("div",x,[d("div",{onClick:s[1]||(s[1]=(...e)=>l.clickSearch&&l.clickSearch(...e)),class:"searchTab tab1 rightLine"},"热门"),d("div",{onClick:s[2]||(s[2]=(...e)=>l.clickSearch&&l.clickSearch(...e)),class:"searchTab tab3"},"浏览")],512),d("div",I,[h(d("ul",T,[(r(!0),o(u,null,f(l.articles,((e,s)=>(r(),o("li",{key:s,class:"infinite-list-item"},[d("div",{onClick:s=>l.goDetail(e),class:"article"},[d("div",w,m(e.author?e.author.username:"岁月如歌")+"·"+m(e.howTime?e.howTime:""),1),d("div",S,m(e.title),1),d("div",_,m(e.introduce),1),d("ul",$,[d("li",B,[E,d("span",null,"  "+m(e.commonnum),1)]),d("li",j,[y,d("span",null,"  "+m(e.readnumber),1)])]),d("img",{class:"articleImg",width:"60",height:"60",src:e.coverImg,alt:""},null,8,["src"])],8,["onClick"])])))),128))],512),[[i,l.load]])])])])}));b.render=C,b.__scopeId="data-v-faf93c76";export default b;
