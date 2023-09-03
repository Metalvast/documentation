"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[1819],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4523:(e,t,r)=>{r.d(t,{ZP:()=>p});var n=r(7622),i=r(9496),a=r(9613),c=r(9028),o=r(6558);const l=e=>{let{ticket:t}=e;const r=`https://github.com/feature-sliced/documentation/issues/${t}`;return i.createElement("div",null,i.createElement("p",null,(0,o.I)({id:"shared.wip.title"})),i.createElement("p",null,(0,o.I)({id:"shared.wip.subtitle"})),i.createElement("ul",null,i.createElement("li",null,(0,o.I)({id:"shared.wip.var.feedback.base"}),i.createElement(c.Z,{to:r},(0,o.I)({id:"shared.wip.var.feedback.link"}))),i.createElement("li",null,(0,o.I)({id:"shared.wip.var.material.base"}),i.createElement(c.Z,{to:"https://t.me/feature_sliced"},(0,o.I)({id:"shared.wip.var.material.link"}))),i.createElement("li",null,(0,o.I)({id:"shared.wip.var.contribute.base"}),i.createElement(c.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,o.I)({id:"shared.wip.var.contribute.link"})))),i.createElement("br",null),i.createElement("p",null,i.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},s={toc:[]},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"WIP",type:"caution"},(0,a.kt)(l,{ticket:r.ticket,mdxType:"WIP"})))}p.isMDXComponent=!0},3961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(7622),i=(r(9496),r(9613)),a=r(4523);const c={sidebar_class_name:"sidebar-item--wip"},o="Metric",l={unversionedId:"guides/examples/metric",id:"guides/examples/metric",title:"Metric",description:"About ways to initialize metrics in the application",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/metric.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/metric",permalink:"/docs/guides/examples/metric",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/examples/metric.mdx",tags:[],version:"current",lastUpdatedAt:1693737994,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Feedback",permalink:"/docs/guides/examples/feedback"},next:{title:"Desktop/Touch platforms",permalink:"/docs/guides/examples/platforms"}},s={},u=[],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metric"},"Metric"),(0,i.kt)(a.ZP,{ticket:"181",mdxType:"WIP"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"About ways to initialize metrics in the application")))}m.isMDXComponent=!0}}]);