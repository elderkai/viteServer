import{g as e,u as l}from"./toolFun.ddcca621.js";import{a1 as a,a2 as i,f as o,i as t,r as s,o as r,c as u,a as d,a3 as n}from"./vendor.e8c09140.js";const c={setup(){let a=o(""),i=t("coverPic"),s=o(!1);o(!0);let r=o([]);return i.value&&r.value.push(i.value),e(),{dialogImageUrl:a,dialogVisible:s,handleRemove:function(e,l){console.log(e,l)},handlePictureCardPreview:function(e){console.log(e),this.dialogImageUrl=e.url,this.dialogVisible=!0},listFile:r,upPictures:function(e){let a=e.file;l(a).then((e=>{i.value=e,console.log(r)}))}}}},v=n("data-v-53c78f46");a("data-v-53c78f46");const p=d("i",{class:"el-icon-plus"},null,-1);i();const g=v(((e,l,a,i,o,t)=>{const n=s("el-upload"),c=s("el-dialog");return r(),u("div",null,[d(n,{"list-type":"picture-card","on-preview":i.handlePictureCardPreview,"http-request":i.upPictures,"file-list":i.listFile,limit:"1","on-remove":i.handleRemove},{default:v((()=>[p])),_:1},8,["on-preview","http-request","file-list","on-remove"]),d(c,{modelValue:i.dialogVisible,"onUpdate:modelValue":l[1]||(l[1]=e=>i.dialogVisible=e)},{default:v((()=>[d("img",{width:"100%",src:i.dialogImageUrl,alt:""},null,8,["src"])])),_:1},8,["modelValue"])])}));c.render=g,c.__scopeId="data-v-53c78f46";export{c as _};
