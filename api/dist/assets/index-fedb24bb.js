import{r as i,j as t}from"./index-d250d8ad.js";import{a as m}from"./api-ecc734f8.js";import{u,S as l,C as d}from"./index-f6cc4235.js";import{A as g}from"./Alert-4499dcfb.js";const c=()=>u({mutationFn:e=>m.dalle.create(e)}),f=({body:e,skip:r})=>{const{data:a,isLoading:s,error:o,mutate:n}=c();return i.useEffect(()=>{r||n(e)},[]),{data:a,isLoading:s,error:o}},C=({prompt:e})=>{const{data:r,error:a,isLoading:s}=f({body:{prompt:e},skip:!e});return e?t.jsxs(t.Fragment,{children:[a&&t.jsx(g,{error:a.message}),s&&t.jsx(l,{message:"Dall-E is generating the image"}),r&&t.jsx(d,{image:r.image,model:r.model,prompt:r.prompt})]}):null};export{C as default};
