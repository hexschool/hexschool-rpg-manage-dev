import{n as D,a as d,c as r,b as e,h,i as a,F as w,q as x,w as p,v as f,R as U,r as m,o as L,A as T,x as _,L as C,E as P,G as A}from"./index.4bfca30a.js";import{a as S}from"./notification.affb5561.js";const B={class:"card shadow-sm rounded-4 overflow-hidden mb-4 position-relative"},G={class:"card-body"},I={class:"card-title mb-3"},z={class:"mb-3 border-bottom"},F=e("h6",null,"\u89F8\u767C\u689D\u4EF6",-1),H={class:"mb-3 border-bottom"},N=e("h6",null,"\u53EF\u7528\u6B04\u4F4D",-1),R={class:"table table-borderless"},q=e("thead",null,[e("tr",null,[e("th",{width:"100"}," \u6B04\u4F4D\u540D\u7A31 "),e("th",{width:"200"}," \u8B8A\u6578 "),e("th",null,"\u6E2C\u8A66\u5C08\u7528\u6E2C\u8A66\u6587\u5B57")])],-1),O=["id","onUpdate:modelValue"],J={class:"row"},K={class:"col-md-6"},Q={class:"mb-3"},W=e("label",{for:"mail_to",class:"form-label"},"\u767C\u9001\u4FE1\u7BB1",-1),X={class:"mb-3"},Y=e("label",{for:"mail_title",class:"form-label"},"\u4FE1\u4EF6\u6A19\u984C",-1),Z={class:"mb-3"},ee=e("label",{for:"mail_time",class:"form-label"},"\u767C\u9001\u9031\u671F",-1),te=["value"],se={class:"mb-3"},le=e("label",{for:"mail_content",class:"form-label"},"\u8A0A\u606F\u5167\u5BB9",-1),ae=e("br",null,null,-1),oe=["innerHTML"],ne={class:"d-flex justify-content-between mt-5"},ie={__name:"Email",props:{data:{type:Object,default:()=>({})},schedulesList:{type:Array,default:()=>[]}},emits:["emailTest","editEmail"],setup(y,{emit:v}){const g=y,{data:l}=D(g),E=(u,s)=>{const t=[];s.forEach(c=>{t.push({id:c.id,content:c.replace_keyword})}),v("emailTest",u,t)},i=(u,s)=>{const t={cht_name:s.cht_name,content:s.content,subject:s.subject,schedule_id:s.schedule_id};v("editEmail",u,t)};return(u,s)=>(d(),r("div",B,[e("div",G,[e("h4",I,h(a(l).cht_name)+"\u56DE\u994B ",1),e("div",z,[F,e("p",null,h(a(l).trigger_description),1)]),e("div",H,[N,e("table",R,[q,e("tbody",null,[(d(!0),r(w,null,x(a(l).variables,t=>(d(),r("tr",{key:`email_${t.id}`},[e("td",null,h(t.cht_name),1),e("td",null,"{% "+h(t.name)+" %}",1),e("td",null,[p(e("input",{id:t.name,"onUpdate:modelValue":c=>t.replace_keyword=c,type:"text",class:"form-control"},null,8,O),[[f,t.replace_keyword]])])]))),128))])])]),e("div",J,[e("div",K,[e("div",Q,[W,p(e("input",{id:"mail_to","onUpdate:modelValue":s[0]||(s[0]=t=>a(l).sender_mail=t),disabled:"",type:"text",class:"form-control",placeholder:"no-reply@hexschool.com"},null,512),[[f,a(l).sender_mail]])]),e("div",X,[Y,p(e("input",{id:"mail_title","onUpdate:modelValue":s[1]||(s[1]=t=>a(l).subject=t),type:"text",class:"form-control",placeholder:"\u4F5C\u696D\u88AB\u6279\u6539"},null,512),[[f,a(l).subject]])]),e("div",Z,[ee,p(e("select",{id:"mail_time","onUpdate:modelValue":s[2]||(s[2]=t=>a(l).schedule_id=t),class:"form-select","aria-label":"Default select example"},[(d(!0),r(w,null,x(y.schedulesList,t=>(d(),r("option",{key:`schedule_${t.id}`,value:t.id},h(t.cht_name),9,te))),128))],512),[[U,a(l).schedule_id]])])])]),e("div",se,[le,p(e("textarea",{"onUpdate:modelValue":s[3]||(s[3]=t=>a(l).content=t),class:"form-control",rows:"20"},null,512),[[f,a(l).content]]),ae,e("div",{innerHTML:a(l).content},null,8,oe)]),e("div",ne,[e("button",{type:"button",class:"btn btn-outline-primary",onClick:s[4]||(s[4]=t=>E(a(l).id,a(l).variables,a(l).content))}," \u6E2C\u8A66\u767C\u9001 "),e("button",{type:"button",class:"btn btn-secondary",onClick:s[5]||(s[5]=t=>i(a(l).id,a(l)))}," \u78BA\u8A8D\u66F4\u65B0 ")])])]))}},ce={class:"px-4 mt-4"},de=e("h4",{class:"mb-3"}," Email \u8A0A\u606F\u7BA1\u7406 ",-1),re={class:"row"},ue={class:"col-md-3"},me={class:"list-group"},_e=["onClick"],he={class:"col-md-9"},fe={__name:"Email",setup(y){const{apiGetEmailList:v,apiPutEmailTemplate:g,apiGetSchedules:l,apiPostEmailTest:E}=S,i=m(!1),u=m(!0),s=m(1),t=m(null),c=m({}),$=async()=>{try{i.value=!0;const{templates:o}=await v();t.value=o,[c.value]=o}catch(o){_("success","Email \u5217\u8868\u51FA\u73FE\u932F\u8AA4",o.response.data.message)}finally{i.value=!1}};L(()=>{$()});const k=m(null),V=async()=>{try{i.value=!0;const{schedules:o}=await l();k.value=o}catch(o){_("danger","\u9031\u671F\u6E05\u55AE\u51FA\u73FE\u932F\u8AA4",o.response.data.message)}finally{i.value=!1}};L(()=>{V()});const M=async(o,b)=>{try{i.value=!0;const{message:n}=await E(o,b);_("success","Email \u767C\u9001\u7D50\u679C",n)}catch(n){_("danger","\u6E2C\u8A66 API \u51FA\u73FE\u932F\u8AA4",n.response.data.message)}finally{i.value=!1}},j=async(o,b)=>{try{i.value=!0;const{message:n}=await g(o,b);_("success","Eamil \u6A23\u677F\u7DE8\u8F2F\u7D50\u679C",n),s.value=1,$()}catch(n){_("danger","\u7DE8\u8F2F Email \u6A23\u677F\u51FA\u73FE\u932F\u8AA4",n.response.data.message)}finally{i.value=!1}};return(o,b)=>(d(),r("div",ce,[T(a(C),{active:i.value,"is-full-page":u.value,"z-index":1021},null,8,["active","is-full-page"]),de,e("div",re,[e("div",ue,[e("div",me,[(d(!0),r(w,null,x(t.value,n=>(d(),r("a",{key:n.id,href:"#",class:P(["list-group-item",s.value===n.id?"active":""]),"aria-current":"true",onClick:A(pe=>(c.value=n,s.value=n.id),["prevent"])},h(n.cht_name),11,_e))),128))])]),e("div",he,[T(ie,{data:c.value,"schedules-list":k.value,onEmailTest:M,onEditEmail:j},null,8,["data","schedules-list"])])])]))}};export{fe as default};
