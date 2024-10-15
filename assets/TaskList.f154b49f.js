import{_ as K,D as Q,u as W,l as X,r,s as R,m as Y,o as Z,z as U,a as o,c as l,b as s,w as B,R as ss,A as b,f as L,v as ts,p as $,F as G,q as V,i as es,g as h,E as as,h as g,G as os,P as ls,S as ns,T as cs,x as is}from"./index.4bfca30a.js";/* empty css                   */import{a as ds}from"./task.af703141.js";import{a as rs}from"./task-tags.fb9d6aeb.js";const u=f=>(ns("data-v-daeda8d6"),f=f(),cs(),f),_s={class:"task px-4 mt-4 position-relative"},us=u(()=>s("h1",{class:"fs-4 mb-0"},"\u4EFB\u52D9\u5217\u8868",-1)),ps={class:"d-flex align-items-center justify-content-between my-3"},ms={class:"row align-items-center w-75"},vs={class:"col-md-6"},gs=u(()=>s("option",{selected:"",value:"default"},"\u5168\u90E8\u4EFB\u52D9",-1)),hs=u(()=>s("option",{value:"task_group"},[h("\u4EE5"),s("b",null,"\u4EFB\u52D9\u7FA4\u7D44"),h("\u7BE9\u9078")],-1)),ks=u(()=>s("option",{value:"task_tags"},[h("\u4EE5"),s("b",null,"\u4EFB\u52D9\u6A19\u7C64"),h("\u7BE9\u9078")],-1)),ys=[gs,hs,ks],bs={key:0},fs={class:"row align-items-center w-75 my-3"},ws=u(()=>s("p",{class:"mb-1"},"\u5148\u9078\u64C7\u4EFB\u52D9\u7FA4\u7D44\u5F8C\uFF0C\u518D\u8F38\u5165\u4EFB\u52D9\u540D\u7A31\u3002",-1)),xs={class:"col-lg-6"},Ts={class:"col-lg-4"},Ls={class:"mb-0"},$s=["disabled"],Gs={key:1,class:"w-75 my-3"},Vs={class:"d-flex flex-wrap"},Cs=["onClick"],Ss={class:"card shadow-sm rounded-4 overflow-hidden mb-4"},qs={class:"card-body p-0"},Ds={class:"table-responsive"},Ms={class:"table table-hover mb-0 text-nowrap",style:{"font-size":"14px"}},Rs=u(()=>s("thead",{class:"bg-light"},[s("tr",null,[s("th",{scope:"col",width:"60",class:"ps-4 py-3 text-muted border-0"}),s("th",{scope:"col",width:"130",class:"ps-4 py-3 text-muted border-0"}," \u5206\u985E\u7FA4\u7D44 "),s("th",{scope:"col",class:"py-3 text-muted border-0"},"\u540D\u7A31"),s("th",{scope:"col",class:"py-3 text-muted border-0"},"\u5206\u985E\u6A19\u7C64"),s("th",{scope:"col",class:"py-3 text-muted border-0"},"\u662F\u5426\u555F\u7528"),s("th",{scope:"col",class:"py-3 text-muted border-0"},"\u958B\u59CB\u6642\u9593"),s("th",{scope:"col",class:"py-3 text-muted border-0"},"\u5230\u671F\u6642\u9593"),s("th",{scope:"col",class:"py-3 text-muted pe-3 border-0"},"\u7DE8\u8F2F")])],-1)),Us={class:"text-nowrap"},Bs={scope:"row",class:"ps-4"},Es={scope:"row",class:"ps-4"},Is={scope:"row",class:"ps-2"},Ns=["onClick"],Ps={scope:"row",class:"ps-2"},zs={scope:"row",class:"ps-2"},As={key:0,class:"text-success"},js={key:1,class:"text-muted"},Fs={scope:"row",class:"ps-2"},Os={key:0},Hs={key:1,class:"text-muted"},Js={scope:"row",class:"ps-2"},Ks={key:0},Qs={key:1,class:"text-muted"},Ws={class:"pe-3"},Xs=u(()=>s("span",{class:"material-icons align-middle fs-6"}," edit ",-1)),Ys=u(()=>s("span",{class:"material-icons align-middle fs-6"}," content_copy ",-1)),Zs={key:0,class:"card-footer bg-white py-3"},st={class:"d-flex flex-wrap align-items-start"},tt={__name:"TaskList",setup(f){const{apiGetTaskGroupsList:E,apiGetTasks:I}=ds,{apiGetTaskTags:N}=rs,x=Q.useLoading(),C=W(),w=X(),T=r([]),d=r(null),p=r({current_page:1,total_page:1}),k=async(e=1)=>{var i,v,t,y;const a=x.show();try{const{tasks:c,pagination:J}=await I({count:20,page:e,scoped:d.value});T.value=c,p.value=J}catch(c){is("danger","\u53D6\u5F97\u4EFB\u52D9\u5217\u8868\u5931\u6557",`${(v=(i=c==null?void 0:c.response)==null?void 0:i.data)==null?void 0:v.statusCode}:${(y=(t=c==null?void 0:c.response)==null?void 0:t.data)==null?void 0:y.message}`)}finally{a.hide()}},P=r([]);R(T,e=>{const a=e.map(i=>i.category);P.value=[...new Set(a)]});const _=r("default"),S=r([]),q=r(!1),z=async()=>{const e=x.show(),{task_groups:a}=await E({page:1,count:150});S.value=a,q.value=!0,e.hide()},D=r([]),M=r(!1),A=async()=>{const e=x.show(),{task_tags:a}=await N({page:1,count:150});D.value=a,M.value=!0,e.hide()};R(_,async e=>{e==="task_group"&&!q.value&&await z(),e==="task_tags"&&!M.value&&await A(),e==="default"&&(d.value="",C.replace({name:"TaskList",query:{}}),k())});const j=e=>{k(e),C.replace({name:"TaskList",query:{}})},n=Y({task_group_id:"",task_name:"",task_tags:""}),F=()=>{d.value=`&filter=${_.value}&task_group_id=${n.task_group_id}`,n.task_name&&(d.value+=`&task_name=${n.task_name}`),k()};Z(async()=>{var e,a,i,v;((e=w.query)==null?void 0:e.filter)==="task_group"&&(_.value="task_group",n.task_group_id=(a=w.query)==null?void 0:a.task_group_id,n.task_name=(i=w.query)==null?void 0:i.task_name,d.value=`&filter=${_.value}&task_group_id=${n.task_group_id}`,n.task_name&&(d.value+=`&task_name=${n.task_name}`)),await k(((v=w.query)==null?void 0:v.page)||1)});const m=r([]),O=e=>{m.value.includes(e)?m.value=m.value.filter(a=>a!==e):m.value.push(e),m.value.length>0?(n.task_tags=m.value.join(","),d.value=`&filter=${_.value}&task_tags=${n.task_tags}`,k()):(d.value=null,k())},H=e=>{window.open(`https://dev-hex-user.hexschool.io/#/tasks/${e}?preview=1`,"_blank")};return(e,a)=>{const i=U("router-link"),v=U("v-select");return o(),l("div",_s,[us,s("div",ps,[s("div",ms,[s("div",vs,[B(s("select",{class:"form-select w-100",placeholder:"\u9078\u64C7\u8981\u7BE9\u9078\u7684\u985E\u5225","onUpdate:modelValue":a[0]||(a[0]=t=>_.value=t)},ys,512),[[ss,_.value]])])]),b(i,{to:"/admin/task/list/create",class:"btn btn-primary"},{default:L(()=>[h(" \u65B0\u589E\u4EFB\u52D9 ")]),_:1})]),_.value==="task_group"?(o(),l("div",bs,[s("div",fs,[ws,s("div",xs,[b(v,{modelValue:n.task_group_id,"onUpdate:modelValue":a[1]||(a[1]=t=>n.task_group_id=t),options:S.value,label:"name",clearable:!1,reduce:t=>t.id},null,8,["modelValue","options","reduce"])]),s("div",Ts,[s("div",Ls,[B(s("input",{id:"search","onUpdate:modelValue":a[2]||(a[2]=t=>n.task_name=t),type:"text",placeholder:"\u641C\u5C0B\u4EFB\u52D9\uFF08\u540D\u7A31\uFF09",class:"form-control",disabled:!n.task_group_id},null,8,$s),[[ts,n.task_name]])])])]),s("div",{class:"mb-4"},[s("button",{type:"button",class:"btn btn-primary",onClick:F}," \u641C\u5C0B ")])])):$("",!0),_.value==="task_tags"?(o(),l("div",Gs,[s("div",Vs,[(o(!0),l(G,null,V(D.value,t=>(o(),l("button",{key:t.id,type:"button",onClick:y=>O(t.id),class:as([{active:m.value.includes(t.id)},"btn btn-sm btn-outline-primary custom-btn-tag border-0 mx-2 mb-1"])},g(t.name),11,Cs))),128))])])):$("",!0),s("div",Ss,[s("div",qs,[s("div",Ds,[s("table",Ms,[Rs,s("tbody",Us,[(o(!0),l(G,null,V(T.value,(t,y)=>(o(),l("tr",{key:t.id,class:"align-middle"},[s("td",Bs,g((p.value.current_page-1)*20+(y+1)),1),s("td",Es,g(t.task_group_name),1),s("td",Is,[s("a",{href:"#",onClick:os(c=>H(t.id),["prevent"])},g(t.name),9,Ns)]),s("td",Ps,[(o(!0),l(G,null,V(t.tags,c=>(o(),l("span",{key:c,class:"badge bg-light text-dark me-1"},g(c),1))),128))]),s("td",zs,[t.enable?(o(),l("span",As,"\u662F")):(o(),l("span",js,"\u5426"))]),s("td",Fs,[t.start_at?(o(),l("span",Os,g(new Date(t.start_at).toLocaleDateString("sv-SE")),1)):(o(),l("span",Hs,"\u672A\u8A2D\u5B9A"))]),s("td",Js,[t.expired_at?(o(),l("span",Ks,g(new Date(t.expired_at).toLocaleDateString("sv-SE")),1)):(o(),l("span",Qs,"\u672A\u8A2D\u5B9A"))]),s("td",Ws,[b(i,{to:`/admin/task/list/${t.id}?page=${p.value.current_page}${d.value?d.value:""}`,class:"btn btn-sm btn-outline-gray"},{default:L(()=>[Xs,h(" \u7DE8\u8F2F ")]),_:2},1032,["to"]),b(i,{to:`/admin/task/list/create?task_copy_id=${t.id}`,class:"btn btn-sm btn-outline-gray ms-1"},{default:L(()=>[Ys,h(" \u8907\u88FD ")]),_:2},1032,["to"])])]))),128))])])])]),p.value.total_page>1?(o(),l("div",Zs,[s("div",st,[b(es(ls),{modelValue:p.value.current_page,"onUpdate:modelValue":a[3]||(a[3]=t=>p.value.current_page=t),records:p.value.total,"per-page":10,options:{chunk:6},onPaginate:j},null,8,["modelValue","records"])])])):$("",!0)])])}}},ct=K(tt,[["__scopeId","data-v-daeda8d6"]]);export{ct as default};
