(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{9818:(e,t,s)=>{Promise.resolve().then(s.bind(s,2848))},6046:(e,t,s)=>{"use strict";var a=s(6658);s.o(a,"useSearchParams")&&s.d(t,{useSearchParams:function(){return a.useSearchParams}})},2848:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var a=s(5155),r=s(5565),n=s(6046),l=s(2115),c=s(3048),o=s(984);function i(e){let{text:t}=e;return t.replace(/_/g," ").charAt(0).toUpperCase()+t.replace(/_/g," ").slice(1)}var d=s(1333),h=s(8173),x=s.n(h);function u(e){let{onQuery:t}=e,s=(0,n.useSearchParams)();return t({id:s.get("q"),uuid:s.get("uuid")}),null}function p(){let[e,t]=(0,l.useState)({}),[s,n]=(0,l.useState)({}),[h,p]=(0,l.useState)(""),[m,j]=(0,l.useState)([]),[g,y]=(0,l.useState)(""),[f,v]=(0,l.useState)(!0),[b,k]=(0,l.useState)(null),[w,N]=(0,l.useState)({field:"pos",order:"asc"}),[S,C]=(0,l.useState)("custom"),M=e=>{y(e)},_=(e,t,s,a)=>{let r=e[a]||[];return s&&(r=r.filter(e=>e.name.toLowerCase().includes(s.toLowerCase()))),r.sort((e,s)=>{let{field:a,order:r}=t;if("score"===a)return"asc"===r?e.value-s.value:s.value-e.value;if("stat"===a)return"asc"===r?e.name.localeCompare(s.name):s.name.localeCompare(e.name);if("pos"===a){var n,l;let t=null!==(n=e.position)&&void 0!==n?n:"asc"===r?1/0:-1/0,a=null!==(l=s.position)&&void 0!==l?l:"asc"===r?1/0:-1/0;return"asc"===r?t-a:a-t}return 0}),r},L=e=>{let t={field:e,order:w.field===e&&"asc"===w.order?"desc":"asc"};j(_(s,t,g,S)),N(t)};(0,l.useEffect)(()=>{j(_(s,w,g,S))},[s,g,w,S]);let U=e=>{let t=e.find(e=>"play_time"===e.name);if(!t||!t.value){p("No playtime data available");return}let s=t.value/20,a=Math.floor(s/2592e3),r=Math.floor(s%2592e3/86400),n=Math.floor(s%86400/3600),l=(e,t,s)=>1===e?t:s;p([a>0?"".concat(a," ").concat(l(a,"month","months")):"",r>0?"".concat(r," ").concat(l(r,"day","days")):"",n>0?"".concat(n," ").concat(l(n,"hour","hours")):""].filter(Boolean).join(", ")||"Less than 1 hour")};return(0,a.jsxs)(l.Suspense,{fallback:(0,a.jsx)("div",{className:"flex justify-center py-4",children:"Loading..."}),children:[(0,a.jsx)(u,{onQuery:s=>{s.id&&s.uuid&&!e.nick&&(s.id?(0,o.Kt)(s.id).then(e=>{e.success?(n(e.player.stats),t({nick:e.player.nick,uuid:e.player.uuid,hof_score:e.player.hof,last_online:"".concat(e.player.last_online.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})," - ").concat(e.player.last_online.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}))}),U(e.player.stats.custom),v(!1)):k(e.error)}):s.uuid?(0,o.k7)(s.uuid).then(e=>{e.success?(n(e.player.stats),t({nick:e.player.nick,uuid:e.player.uuid,hof_score:e.player.hof,last_online:"".concat(e.player.last_online.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})," - ").concat(e.player.last_online.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}))}),v(!1)):k(e.error)}):(v(!1),k("No player ID or UUID found in URL")))}}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 justify-center pb-8",children:[(0,a.jsx)("div",{className:"flex flex-col justify-center",children:e.uuid?(0,a.jsx)(r.default,{src:"https://nmsr.nickac.dev/face/".concat(e.uuid),alt:"Player Head",width:80,height:80}):(0,a.jsx)(r.default,{src:"/assets/steve.webp",alt:"Player Head",width:80,height:80})}),(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center sm:items-start text-xs sm:text-base",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("h2",{className:"text-xl sm:text-3xl font-bold",children:e.nick||"Missing nick"}),(0,a.jsxs)("p",{children:["(",(0,a.jsxs)("span",{className:"text-mc_gold",children:[e.hof_score,"⭐"]}),")"]})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Last played:"})," ",e.last_online]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Total playtime:"})," ",h]}),(0,a.jsx)("p",{id:"urlUUID",className:"hidden",children:e.uuid})]})]}),(0,a.jsxs)("div",{className:"flex items-center lg:space-x-2 pb-2 lg:pb-0",children:[(0,a.jsxs)("div",{className:"my-2 space-x-2 bg-white rounded-md p-1 shrink-0 hidden lg:flex text-xs xl:text-base",children:[(0,a.jsx)("button",{className:"hover:font-bold text-gray-800 px-2 py-1 rounded-md ".concat("custom"===S?"bg-gray-200/80":""),onClick:()=>C("custom"),children:"Custom"}),(0,a.jsx)("button",{className:"hover:font-bold text-gray-800 px-2 py-1 rounded-md ".concat("mined"===S?"bg-gray-200/80":""),onClick:()=>C("mined"),children:"Mined"}),(0,a.jsx)("button",{className:"hover:font-bold text-gray-800 px-2 py-1 rounded-md ".concat("crafted"===S?"bg-gray-200/80":""),onClick:()=>C("crafted"),children:"Crafted"}),(0,a.jsx)("button",{className:"hover:font-bold text-gray-800 px-2 py-1 rounded-md ".concat("used"===S?"bg-gray-200/80":""),onClick:()=>C("used"),children:"Used"}),(0,a.jsx)("button",{className:"hover:font-bold text-gray-800 px-2 py-1 rounded-md ".concat("broken"===S?"bg-gray-200/80":""),onClick:()=>C("broken"),children:"Broken"}),(0,a.jsx)("button",{className:"hover:font-bold text-gray-800 px-2 py-1 rounded-md ".concat("picked_up"===S?"bg-gray-200/80":""),onClick:()=>C("picked_up"),children:"Picked Up"}),(0,a.jsx)("button",{className:"hover:font-bold text-gray-800 px-2 py-1 rounded-md ".concat("dropped"===S?"bg-gray-200/80":""),onClick:()=>C("dropped"),children:"Dropped"}),(0,a.jsx)("button",{className:"hover:font-bold text-gray-800 px-2 py-1 rounded-md ".concat("killed"===S?"bg-gray-200/80":""),onClick:()=>C("killed"),children:"Kills"}),(0,a.jsx)("button",{className:"hover:font-bold text-gray-800 px-2 py-1 rounded-md ".concat("killed_by"===S?"bg-gray-200/80":""),onClick:()=>C("killed_by"),children:"Deaths"})]}),(0,a.jsxs)("select",{className:"p-2 px-3 rounded-lg appearance-none focus:outline-none mr-2 lg:hidden cursor-pointer bg-white",onChange:e=>C(e.target.value),children:[(0,a.jsx)("option",{value:"custom",children:"Custom"}),(0,a.jsx)("option",{value:"mined",children:"Mined"}),(0,a.jsx)("option",{value:"crafted",children:"Crafted"}),(0,a.jsx)("option",{value:"used",children:"Used"}),(0,a.jsx)("option",{value:"broken",children:"Broken"}),(0,a.jsx)("option",{value:"picked_up",children:"Picked Up"}),(0,a.jsx)("option",{value:"dropped",children:"Dropped"}),(0,a.jsx)("option",{value:"killed",children:"Kills"})]}),(0,a.jsx)("input",{type:"text",placeholder:"Search ...",value:g,onChange:e=>M(e.target.value),className:"p-2 rounded-md w-full focus:outline-none text-base lg:text-xs xl:text-base"})]}),f?b?(0,c.A)({error:b}):(0,a.jsx)("div",{className:"flex justify-center py-4",children:(0,a.jsx)(r.default,{src:"/assets/loading_clock.gif",alt:"Loading",width:80,height:80})}):(0,a.jsxs)("table",{className:"table-auto w-full rounded-xl overflow-hidden",children:[(0,a.jsx)("thead",{className:"bg-white",children:(0,a.jsxs)("tr",{className:"h-10",children:[(0,a.jsxs)("th",{className:"w-16 sm:w-24 ",children:["Pos",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"inline ml-1 cursor-pointer",onClick:()=>L("pos"),children:"pos"===w.field&&"asc"===w.order?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"m3 8 4-4 4 4"}),(0,a.jsx)("path",{d:"M7 4v16"}),(0,a.jsx)("rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}),(0,a.jsx)("path",{d:"M17 20v-6h-2"}),(0,a.jsx)("path",{d:"M15 20h4"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"m3 8 4-4 4 4"}),(0,a.jsx)("path",{d:"M7 4v16"}),(0,a.jsx)("path",{d:"M17 10V4h-2"}),(0,a.jsx)("path",{d:"M15 10h4"}),(0,a.jsx)("rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"})]})})]}),(0,a.jsxs)("th",{className:"text-left max-w-min",children:["Statistics",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"inline ml-1 cursor-pointer",onClick:()=>L("stat"),children:"stat"===w.field&&"asc"===w.order?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"m3 8 4-4 4 4"}),(0,a.jsx)("path",{d:"M7 4v16"}),(0,a.jsx)("path",{d:"M20 8h-5"}),(0,a.jsx)("path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}),(0,a.jsx)("path",{d:"M15 14h5l-5 6h5"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"m3 8 4-4 4 4"}),(0,a.jsx)("path",{d:"M7 4v16"}),(0,a.jsx)("path",{d:"M15 4h5l-5 6h5"}),(0,a.jsx)("path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}),(0,a.jsx)("path",{d:"M20 18h-5"})]})})]}),(0,a.jsxs)("th",{className:"text-right w-36 sm:w-auto pr-4",children:["Score",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"inline ml-1 cursor-pointer",onClick:()=>L("score"),children:"score"===w.field&&"asc"===w.order?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"m3 8 4-4 4 4"}),(0,a.jsx)("path",{d:"M7 4v16"}),(0,a.jsx)("rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}),(0,a.jsx)("path",{d:"M17 20v-6h-2"}),(0,a.jsx)("path",{d:"M15 20h4"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"m3 8 4-4 4 4"}),(0,a.jsx)("path",{d:"M7 4v16"}),(0,a.jsx)("path",{d:"M17 10V4h-2"}),(0,a.jsx)("path",{d:"M15 10h4"}),(0,a.jsx)("rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"})]})})]})]})}),(0,a.jsx)("tbody",{className:"bg-white/40 text-xs md:text-base",children:m.map((e,t)=>(0,a.jsxs)("tr",{className:"hover:bg-gray-300/40 even:bg-white/50 hover:font-bold",children:[(0,a.jsx)("td",{className:"text-center max-w-fit",children:e.position?1===e.position?(0,a.jsxs)("span",{className:"text-yellow-600 text-sm",children:[(0,a.jsx)("span",{className:"text-yellow-600 text-xs",children:"#"}),"1"]}):2===e.position?(0,a.jsxs)("span",{className:"text-orange-600 text-sm",children:[(0,a.jsx)("span",{className:"text-orange-600 text-xs",children:"#"}),"2"]}):3===e.position?(0,a.jsxs)("span",{className:"text-gray-800 text-sm",children:[(0,a.jsx)("span",{className:"text-gray-800 text-xs",children:"#"}),"3"]}):(0,a.jsxs)("span",{className:"text-gray-500 text-sm",children:[(0,a.jsx)("span",{className:"text-gray-400 text-xs",children:"#"}),e.position]}):""}),(0,a.jsx)("td",{className:"text-gray-700 truncate overflow-hidden max-w-20",children:(0,a.jsx)(x(),{href:"/stat?c=".concat(S,"&q=").concat(e.name),children:(0,a.jsx)(i,{text:e.name})})}),(0,a.jsx)("td",{className:"text-right pr-4 ",children:(0,a.jsx)(d.A,{text:String(e.value)})})]},t))})]})]})}},3048:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(5155);let r=e=>{let{error:t}=e;return(0,a.jsx)("div",{className:"flex justify-center py-4 border-2 border-red-300 rounded-md bg-red-200/40",children:(0,a.jsx)("p",{className:"text-red-500",children:JSON.stringify(t)})})}},1333:(e,t,s)=>{"use strict";function a(e){let{text:t}=e;return t.replace(/\d+/g,e=>Number(e).toLocaleString("en-US").replace(/,/g," "))}s.d(t,{A:()=>a})},984:(e,t,s)=>{"use strict";let a;s.d(t,{AL:()=>r,I$:()=>o,Kt:()=>l,Y:()=>c,k7:()=>n,v:()=>i,v7:()=>d}),a=Promise.all([s.e(268),s.e(367),s.e(972)]).then(s.bind(s,6699));let r=async function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(await a).getAllPlayers(...t)},n=async function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(await a).getPlayerDataByUUID(...t)},l=async function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(await a).getPlayerDataByID(...t)},c=async function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(await a).getHallOfFameData(...t)},o=async function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(await a).getServerData(...t)},i=async function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(await a).getServerStats(...t)},d=async function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(await a).getStatData(...t)}}},e=>{var t=t=>e(e.s=t);e.O(0,[970,465,441,517,358],()=>t(9818)),_N_E=e.O()}]);