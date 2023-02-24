import{l as c,j as e,F as l,W as m,z as p,L as d,A as u}from"./index-dadc03a8.js";import{a as x}from"./api-deb0654c.js";import{u as g,Q as b}from"./useBaseQuery-1b931cfb.js";function j(r,t,n){const a=c(r,t,n);return g(a,b)}const y=({id:r})=>j({queryKey:["Post",r],queryFn:()=>x.posts.getOne(r),refetchOnWindowFocus:!1,cacheTime:1/0,enabled:Boolean(r)}),w=({image:r,modelo:t})=>{const n=window.location.href,a=`Image generated by ${t}`;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("a",{className:"btn btn-primary btn-sm capitalize",href:r,download:!0,target:"_blank",rel:"noreferrer",children:"Download"}),e.jsx("a",{className:"btn btn-primary btn-sm capitalize",href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(a)}&url=${encodeURIComponent(n)}`,target:"_blank",rel:"noreferrer",children:e.jsx(l,{size:"1.25rem"})})]})},f=({name:r,prompt:t,image:n,modelo:a,createdAt:s=""})=>{const o=s?new Date(s).toDateString():"";return e.jsxs("div",{className:"flex flex-col justify-start items-start gap-1 px-8 text-gray-300 text-opacity-90 w-full lg:justify-center",children:[e.jsx("h1",{className:"capitalize text-xl",children:r}),e.jsx("p",{className:"capitalize text-lg",children:t}),e.jsxs("p",{className:"text-sm",children:["created by ",a," | 512x512.png | ",o]}),e.jsx(w,{image:n,modelo:a})]})},h="_container_1rk92_1",k="_containerViewer_1rk92_15",i={container:h,containerViewer:k},N=({image:r,modelo:t,prompt:n})=>{const a={backgroundImage:`url(${r})`,backgroundAttachment:"scroll",backgroundOrigin:"padding-box",backgroundClip:"border-box",backgroundPositionX:"right",backgroundPositionY:"bottom",backgroundSize:"cover",backdropFilter:"blur(12px)"};return e.jsx("div",{style:a,className:`w-full h-full flex justify-center items-center relative ${i.containerViewer}`,children:e.jsx("img",{className:"object-contain z-50",src:r,alt:`image generated by ${t} with prompt ${n}`})})},I=({name:r,prompt:t,modelo:n,image:a,createdAt:s})=>e.jsxs("div",{className:`${i.container} w-full lg:w-[80%] md:w-[90%] sm:w-[95%]`,children:[e.jsx(N,{image:a,modelo:n,prompt:t}),e.jsx(f,{name:r,image:a,modelo:n,prompt:t,createdAt:s})]}),v=({image:r,modelo:t,name:n})=>e.jsxs(m,{children:[e.jsx("title",{children:n}),e.jsx("meta",{property:"og:url",content:window.location.href}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:title",content:n}),e.jsx("meta",{property:"og:description",content:`Image created by AI ${t}`}),e.jsx("meta",{property:"og:image",content:r}),e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{property:"twitter:title",content:n}),e.jsx("meta",{property:"twitter:description",content:`Image created by AI ${t}`}),e.jsx("meta",{property:"twitter:image",content:r})]}),A=({id:r})=>{const{data:t,isLoading:n,error:a}=y({id:r}),s=p();if(!r)return null;const o=()=>{s(".",{replace:!0})};return e.jsxs("div",{className:"grid place-items-center bg-black bg-opacity-50 backdrop-blur-md fixed top-0 left-0 w-full h-screen z-[999]",children:[t&&e.jsx(v,{image:t.image,modelo:t.modelo,name:t.name}),a&&e.jsx("p",{children:a.message}),n&&e.jsx(d,{}),t&&e.jsx(I,{image:t.image,name:t.name,modelo:t.modelo,prompt:t.prompt,createdAt:t.createdAt}),e.jsx("button",{className:"btn btn-circle btn-error absolute right-5 top-5",onClick:o,children:e.jsx(u,{size:"1.25rem"})})]})};export{A as default};
