import{r as n,j as r}from"./index-38f38d53.js";import{a as m}from"./api-2a45d749.js";import{u,S as f,C as l}from"./index-5af3a7c3.js";import{A as d}from"./Alert-8dcbcf0c.js";const g=()=>u({mutationFn:e=>m.stabledif.create(e)}),c=({body:e,skip:t})=>{const{data:a,isLoading:s,error:o,mutate:i}=g();return n.useEffect(()=>{t||i(e)},[]),{data:a,isLoading:s,error:o}},S=({prompt:e})=>{const{data:t,error:a,isLoading:s}=c({body:{prompt:e},skip:!e});return e?r.jsxs(r.Fragment,{children:[a&&r.jsx(d,{error:a.message}),s&&r.jsx(f,{message:"Stable Diff is generating the image"}),t&&r.jsx(l,{image:t.image,model:t.model,prompt:t.prompt})]}):null};export{S as default};