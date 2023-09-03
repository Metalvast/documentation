"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[5066],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(a),p=r,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||c;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4327:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(7622),r=(a(9496),a(9613)),c=a(9815);const o={toc:[]},i="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(i,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c.Z,(0,n.Z)({},a,{mdxType:"NavCard"})))}s.isMDXComponent=!0},8662:(e,t,a)=>{a.d(t,{ga:()=>n});var n={};a.r(n),a.d(n,{CATEGORIES:()=>c,sendEvent:()=>r});const r=e=>{let{category:t,action:a,label:n,value:r}=e;if(void 0!==typeof window&&window.ga)return window.ga("send",{hitType:"event",eventCategory:t,eventAction:a,eventLabel:n,eventValue:r})},c={full:"Feedback 1.2 (full)",mixed:"Feedback 1.2 (mixed)",short:"Feedback 1.2 (short)"}},9815:(e,t,a)=>{a.d(t,{J:()=>s,Z:()=>d});var n=a(9496),r=a(1626),c=a(9028),o=a(8662);const i={root:"root_GfON",rootDisabled:"rootDisabled_SFUB",details:"details_xxkR",detailsTags:"detailsTags_uTQx",icon:"icon_ciqP",title:"title_pSH5",description:"description__Fep",miniTheme:"miniTheme_ePfp",primaryTheme:"primaryTheme_CilO",defaultTheme:"defaultTheme_j3I8"},s=e=>{const{title:t,description:a,to:s,Icon:d,tags:u,className:m,disabled:p,theme:g="default"}=e,f=(0,n.useCallback)((()=>{o.ga.sendEvent({category:o.ga.CATEGORIES.full,action:"NavRow:Click",label:s})}),[s]);return n.createElement(c.Z,{className:(0,r.Z)(i.root,m,p&&i.rootDisabled,i[`${g}Theme`]),to:s,onClick:f},n.createElement(l,{Icon:d}),n.createElement("div",{className:i.details},n.createElement("div",{className:i.detailsMain},n.createElement("span",{className:i.title},t),n.createElement("p",{className:i.description},a)),u&&n.createElement("div",{className:i.detailsTags},u.join(" \u2022 "))))},l=e=>{let{Icon:t}=e;return t?"string"==typeof t?n.createElement("span",{className:i.icon},t):n.createElement(t,{className:i.icon}):null},d=s},1771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>E,contentTitle:()=>x,default:()=>N,frontMatter:()=>O,metadata:()=>T,toc:()=>w});var n=a(7622),r=a(9496),c=a(9613),o=a(4327);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"};var s=a(1865),l=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:i}))};l.displayName="ToolOutlined";const d=r.forwardRef(l);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zM902 476H588v-76c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-76h314c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"import",theme:"outlined"};var m=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:u}))};m.displayName="ImportOutlined";const p=r.forwardRef(m);const g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M841 370c3-3.3 2.7-8.3-.6-11.3a8.24 8.24 0 00-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6a7.96 7.96 0 01-13.4-1.9l-63.5-141.3a7.9 7.9 0 00-7.3-4.7H380.7l.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415a8.07 8.07 0 007.8 9.7H284l-89 429.9a8.07 8.07 0 007.8 9.7H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 .9.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6a8.02 8.02 0 007.2-11.5l-95.2-198.9c-1.4-2.9-.9-6.4 1.3-8.8L841 370z"}}]},name:"function",theme:"outlined"};var f=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:g}))};f.displayName="FunctionOutlined";const h=r.forwardRef(f);const v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 00123.2-149.5A120 120 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 01308 680V412h408v268z"}}]},name:"bug",theme:"outlined"};var y=function(e,t){return r.createElement(s.Z,Object.assign({},e,{ref:t,icon:v}))};y.displayName="BugOutlined";const b=r.forwardRef(y),O={hide_table_of_contents:!0,pagination_prev:"get-started/index"},x="\ud83c\udfaf Guides",T={unversionedId:"guides/index",id:"guides/index",title:"\ud83c\udfaf Guides",description:"PRACTICE-ORIENTED",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/index.mdx",sourceDirName:"guides",slug:"/guides/",permalink:"/uz/docs/guides/",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/index.mdx",tags:[],version:"current",lastUpdatedAt:1693737994,formattedLastUpdatedAt:"3-sen, 2023",frontMatter:{hide_table_of_contents:!0,pagination_prev:"get-started/index"},sidebar:"guidesSidebar",previous:{title:"\ud83d\ude80 Get Started",permalink:"/uz/docs/get-started/"},next:{title:"Examples",permalink:"/uz/docs/guides/examples/"}},E={},w=[{value:"Main",id:"main",level:2}],C={toc:w},k="wrapper";function N(e){let{components:t,...a}=e;return(0,c.kt)(k,(0,n.Z)({},C,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"-guides"},"\ud83c\udfaf Guides"),(0,c.kt)("span",{class:"badge badge--primary margin-bottom--md"},"PRACTICE-ORIENTED"),(0,c.kt)("p",{class:"summary"},'Practical guides and examples on the use of Feature-Sliced Design. There is also describe migration guides and a handbook of harmful practices. It is most useful when you are trying to implement something specific or want to look at the methodology "in battle"'),(0,c.kt)("h2",{id:"main"},"Main"),(0,c.kt)(o.ZP,{title:"Examples",description:"Practical examples on the application of the methodology",to:"/docs/guides/examples",Icon:d,tags:["Auth","Types","Page layout"],mdxType:"NavCard"}),(0,c.kt)(o.ZP,{title:"Migration",description:"Migration guides for legacy projects",to:"/docs/guides/migration/from-v1",Icon:p,tags:["From legacy","From FSv1"],mdxType:"NavCard"}),(0,c.kt)(o.ZP,{title:"Tech",description:"Tech-specific guides for FSD usage",to:"/docs/guides/tech/with-nextjs",Icon:h,mdxType:"NavCard"}),(0,c.kt)(o.ZP,{title:"Code Issues (Smells)",description:"General architecture issues for legacy code",to:"/docs/guides/issues/desegmented",Icon:b,tags:["Desegmented","Routing","Cross-imports"],mdxType:"NavCard"}))}N.isMDXComponent=!0}}]);