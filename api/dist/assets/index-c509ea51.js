import{r as s,_ as o,b as l,j as e,H as n,S as r}from"./index-38f38d53.js";const c=s.lazy(()=>o(()=>import("./SearchGallery-8dff6ea2.js"),["assets/SearchGallery-8dff6ea2.js","assets/index-38f38d53.js","assets/index-079afaa8.css","assets/useParamsGallery-0ed55673.js"])),i=s.lazy(()=>o(()=>import("./OrderbyGallery-26103f54.js"),["assets/OrderbyGallery-26103f54.js","assets/index-38f38d53.js","assets/index-079afaa8.css","assets/useParamsGallery-0ed55673.js"])),d=s.lazy(()=>o(()=>import("./index-6c7b5cce.js"),["assets/index-6c7b5cce.js","assets/index-38f38d53.js","assets/index-079afaa8.css","assets/api-2a45d749.js","assets/useBaseQuery-04149276.js","assets/useParamsGallery-0ed55673.js","assets/index-5af3a7c3.js","assets/index-72396a29.css"])),m=s.lazy(()=>o(()=>import("./index-d466e46e.js"),["assets/index-d466e46e.js","assets/index-38f38d53.js","assets/index-079afaa8.css","assets/api-2a45d749.js","assets/useBaseQuery-04149276.js","assets/index-1c2ff8fa.css"])),_=()=>{const[a]=l(),t=a.get("imageId");return s.useEffect(()=>{if(!t)return document.body.classList.remove("overflow-y-hidden");document.body.classList.add("overflow-y-hidden")},[t]),e.jsxs("div",{className:"flex flex-col justify-start gap-4 px-1 pt-8 pb-16 min-h-screen md:px-0",children:[e.jsx(n,{children:e.jsx("title",{children:"Gallery"})}),e.jsx("h1",{className:"text-3xl font-bold text-center pb-4",children:"Gallery"}),e.jsx(r,{component:e.jsx(c,{})}),e.jsx(r,{component:e.jsx(i,{})}),e.jsx(r,{component:e.jsx(d,{})}),t&&e.jsx(r,{component:e.jsx(m,{id:t})})]})};export{_ as default};