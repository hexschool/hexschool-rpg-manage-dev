import{U as t}from"./index.4bfca30a.js";const g=({page:a=1,count:s=20,scoped:e})=>t.get(`/v1/task-tags?page=${a}&count=${s}${e?`&${e}`:""}`),o=a=>t.get(`/v1/task-tags/${a}`),k=a=>t.post("/v1/task-tags",a),p=(a,s)=>t.put(`/v1/task-tags/${a}`,s),T=a=>t.delete(`/v1/task-tags/${a}`),n={apiGetTaskTags:g,apiGetTaskTagById:o,apiPostTaskTags:k,apiPutTaskTagById:p,apiDeleteTaskTagById:T};export{n as a};
