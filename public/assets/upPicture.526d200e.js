import{g as e,u as l}from"./toolFun.316408ce.js";import{a3 as a,a4 as i,f as o,i as t,r as s,o as r,c as u,a as n,a5 as d}from"./vendor.03d6fc96.js";const c={setup(){let a=o(""),i=t("coverPic"),s=o(!1);o(!0);let r=o([]);return i.value&&r.value.push(i.value),e(),{dialogImageUrl:a,dialogVisible:s,handleRemove:function(e,l){console.log(e,l)},handlePictureCardPreview:function(e){console.log(e),this.dialogImageUrl=e.url,this.dialogVisible=!0},listFile:r,upPictures:function(e){let a=e.file;l(a).then((e=>{i.value=e,console.log(r)}))}}}},p=d();a("data-v-53c78f46");const v=n("i",{class:"el-icon-plus"},null,-1);i();const g=p(((e,l,a,i,o,t)=>{const d=s("el-upload"),c=s("el-dialog");return r(),u("div",null,[n(d,{"list-type":"picture-card","on-preview":i.handlePictureCardPreview,"http-request":i.upPictures,"file-list":i.listFile,limit:"1","on-remove":i.handleRemove},{default:p((()=>[v])),_:1},8,["on-preview","http-request","file-list","on-remove"]),n(c,{modelValue:i.dialogVisible,"onUpdate:modelValue":l[1]||(l[1]=e=>i.dialogVisible=e)},{default:p((()=>[n("img",{width:"100%",src:i.dialogImageUrl,alt:""},null,8,["src"])])),_:1},8,["modelValue"])])}));c.render=g,c.__scopeId="data-v-53c78f46";export{c as _};
