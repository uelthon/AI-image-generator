import{r,_ as n,u as l,a as o,j as e,H as c,S as a}from"./index-8d7db3e0.js";const p="_generate_12ftp_1",i={generate:p},x=r.lazy(()=>n(()=>import("./index-1c846c06.js"),["assets/index-1c846c06.js","assets/index-8d7db3e0.js","assets/index-079afaa8.css","assets/api-600a6af0.js","assets/index-443cf5de.js","assets/index-72396a29.css","assets/Alert-95d30eaa.js"])),m=r.lazy(()=>n(()=>import("./index-3ca59fc7.js"),["assets/index-3ca59fc7.js","assets/index-8d7db3e0.js","assets/index-079afaa8.css","assets/api-600a6af0.js","assets/index-443cf5de.js","assets/index-72396a29.css","assets/Alert-95d30eaa.js"])),u=()=>{const{models:s}=l(),t=o("/generate/:prompt").params.prompt;return e.jsxs("div",{className:"flex flex-col justify-start w-full gap-8 pt-4 pb-16 min-h-screen px-1 md:px-0",children:[e.jsx(c,{children:e.jsx("title",{children:"Generate"})}),e.jsxs("h1",{className:"text-3xl font-bold text-center",children:["Result of ",t]}),e.jsxs("div",{className:i.generate,children:[s.includes("dalle")&&e.jsx(a,{component:e.jsx(x,{prompt:t})}),s.includes("stablediff")&&e.jsx(a,{component:e.jsx(m,{prompt:t})})]})]})};export{u as default};