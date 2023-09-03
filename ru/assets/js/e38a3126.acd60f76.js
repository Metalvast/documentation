"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[9877],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(7622),a=(n(9496),n(9613));const l={title:"\u0421\u043b\u0430\u0439\u0441\u044b \u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b",sidebar_position:2,pagination_next:"reference/public-api"},i="\u0421\u043b\u0430\u0439\u0441\u044b \u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b",p={unversionedId:"reference/slices-segments",id:"reference/slices-segments",title:"\u0421\u043b\u0430\u0439\u0441\u044b \u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b",description:"\u0421\u043b\u0430\u0439\u0441\u044b",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/slices-segments.mdx",sourceDirName:"reference",slug:"/reference/slices-segments",permalink:"/ru/docs/reference/slices-segments",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/reference/slices-segments.mdx",tags:[],version:"current",lastUpdatedAt:1693737994,formattedLastUpdatedAt:"3 \u0441\u0435\u043d\u0442. 2023 \u0433.",sidebarPosition:2,frontMatter:{title:"\u0421\u043b\u0430\u0439\u0441\u044b \u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b",sidebar_position:2,pagination_next:"reference/public-api"},sidebar:"referenceSidebar",previous:{title:"\u0421\u043b\u043e\u0438",permalink:"/ru/docs/reference/layers"},next:{title:"Public API",permalink:"/ru/docs/reference/public-api"}},o={},d=[{value:"\u0421\u043b\u0430\u0439\u0441\u044b",id:"\u0441\u043b\u0430\u0439\u0441\u044b",level:2},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e API \u0434\u043b\u044f \u0441\u043b\u0430\u0439\u0441\u043e\u0432",id:"\u043f\u0440\u0430\u0432\u0438\u043b\u043e-\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e-api-\u0434\u043b\u044f-\u0441\u043b\u0430\u0439\u0441\u043e\u0432",level:3},{value:"\u0421\u0435\u0433\u043c\u0435\u043d\u0442\u044b",id:"\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3}],s={toc:d},c="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0441\u043b\u0430\u0439\u0441\u044b-\u0438-\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b"},"\u0421\u043b\u0430\u0439\u0441\u044b \u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b"),(0,a.kt)("h2",{id:"\u0441\u043b\u0430\u0439\u0441\u044b"},"\u0421\u043b\u0430\u0439\u0441\u044b"),(0,a.kt)("p",null,"\u0421\u043b\u0430\u0439\u0441\u044b - \u044d\u0442\u043e \u0432\u0442\u043e\u0440\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0432 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 Feature-Sliced Design. \u0418\u0445 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 - \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0434 \u043f\u043e \u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430, \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,a.kt)("p",null,"\u0418\u043c\u0435\u043d\u0430 \u0441\u043b\u0430\u0439\u0441\u043e\u0432 \u043d\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d\u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u0431\u0438\u0437\u043d\u0435\u0441-\u043e\u0431\u043b\u0430\u0441\u0442\u044c\u044e \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0444\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0441\u043b\u0430\u0439\u0441\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"photo"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"create-album"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"gallery-page"),". \u0414\u043b\u044f \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043b\u0430\u0439\u0441\u044b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"add-user-to-friends"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"news-feed"),"."),(0,a.kt)("p",null,"\u0411\u043b\u0438\u0437\u043a\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441\u043b\u0430\u0439\u0441\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u043e \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432 \u043e\u0434\u043d\u043e\u0439 \u043f\u0430\u043f\u043a\u0435, \u043d\u043e \u043e\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c \u0442\u0435 \u0436\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438, \u0447\u0442\u043e \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043b\u0430\u0439\u0441\u044b - \u0432 \u044d\u0442\u043e\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c ",(0,a.kt)("strong",{parentName:"p"},"\u043d\u0438\u043a\u0430\u043a\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u043b\u0430\u0439\u0441\u0430\u043c\u0438"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u0424\u0438\u0447\u0438 &quot;compose&quot; (\u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c), &quot;like&quot; (\u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0435\u0441\u044f) \u0438 &quot;delete&quot; (\u0443\u0434\u0430\u043b\u0438\u0442\u044c), \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432 \u043f\u0430\u043f\u043a\u0443 &quot;post&quot; (\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f). \u0412 \u044d\u0442\u043e\u0439 \u043f\u0430\u043f\u043a\u0435 \u0442\u0430\u043a\u0436\u0435 \u0435\u0441\u0442\u044c \u0444\u0430\u0439\u043b &quot;some-shared-code.ts&quot; (\u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043e\u0431\u0449\u0438\u0439 \u043a\u043e\u0434), \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u043e, \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0442\u0430\u043c \u0431\u044b\u0442\u044c.",src:n(7304).Z,width:"365",height:"236"})),(0,a.kt)("p",null,"\u0421\u043b\u043e\u0438 Shared \u0438 App \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0441\u043b\u0430\u0439\u0441\u043e\u0432. \u042d\u0442\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043e \u0441 \u0442\u0435\u043c, \u0447\u0442\u043e Shared \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430, \u0430 App \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u0434, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0439\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0438 \u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438."),(0,a.kt)("h3",{id:"\u043f\u0440\u0430\u0432\u0438\u043b\u043e-\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e-api-\u0434\u043b\u044f-\u0441\u043b\u0430\u0439\u0441\u043e\u0432"},"\u041f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e API \u0434\u043b\u044f \u0441\u043b\u0430\u0439\u0441\u043e\u0432"),(0,a.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0438 \u0441\u043b\u0430\u0439\u0441\u0430 \u043a\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d \u043a\u0430\u043a \u0443\u0433\u043e\u0434\u043d\u043e, \u0438 \u044d\u0442\u043e \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0441\u0440\u0435\u0437 \u0438\u043c\u0435\u0435\u0442 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 API. \u0412 \u044d\u0442\u043e\u043c \u0441\u0443\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u0430 ",(0,a.kt)("strong",{parentName:"p"},"\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e API \u0434\u043b\u044f \u0441\u043b\u0430\u0439\u0441\u043e\u0432"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u0430\u0439\u0441 (\u0438 \u0441\u0435\u0433\u043c\u0435\u043d\u0442 \u043d\u0430 \u0441\u043b\u043e\u044f\u0445, \u043d\u0435 \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u0441\u043b\u0430\u0439\u0441\u043e\u0432) \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e API.")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\u041c\u043e\u0434\u0443\u043b\u0438 \u0432\u043d\u0435 \u044d\u0442\u043e\u0433\u043e \u0441\u043b\u0430\u0439\u0441\u0430/\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430 \u043c\u043e\u0433\u0443\u0442 \u0441\u0441\u044b\u043b\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 API, \u0430 \u043d\u0435 \u043d\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044e\u044e \u0444\u0430\u0439\u043b\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u044d\u0442\u043e\u0433\u043e \u0441\u043b\u0430\u0439\u0441\u0430/\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430."))),(0,a.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u0445 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 API \u0438 \u043b\u0443\u0447\u0448\u0438\u0445 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u0445 \u0438\u0445 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0432 ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/public-api"},"\u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0435 \u043e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 API"),"."),(0,a.kt)("h2",{id:"\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b"},"\u0421\u0435\u0433\u043c\u0435\u043d\u0442\u044b"),(0,a.kt)("p",null,"\u0421\u0435\u0433\u043c\u0435\u043d\u0442\u044b - \u044d\u0442\u043e \u0442\u0440\u0435\u0442\u0438\u0439 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0432 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438, \u0438\u0445 \u0446\u0435\u043b\u044c - \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0434 \u043f\u043e \u0435\u0433\u043e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u0440\u0438\u0440\u043e\u0434\u0435."),(0,a.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u043e\u0432:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ui")," - \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"model")," - \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0430 \u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u044d\u0442\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lib")," - \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u044b\u0439 \u043a\u043e\u0434"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api")," - \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 API, API-\u043c\u0435\u0442\u043e\u0434\u044b \u0431\u044d\u043a\u0435\u043d\u0434\u0430")),(0,a.kt)("p",null,"\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f, \u043d\u043e \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438. \u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0441\u0442\u0430\u043c\u0438 \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u043e\u0432 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441\u043b\u043e\u0438 App \u0438 Shared, \u0433\u0434\u0435 \u0441\u0440\u0435\u0437\u044b \u043d\u0435 \u0438\u043c\u0435\u044e\u0442 \u0441\u043c\u044b\u0441\u043b\u0430."),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Layer"),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"th"},"ui")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"th"},"model")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"th"},"lib")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"th"},"api")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Shared"),(0,a.kt)("td",{parentName:"tr",align:"left"},"UI-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u041e\u0431\u044b\u0447\u043d\u043e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u0423\u0442\u0438\u043b\u0438\u0442\u0430\u0440\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432. ",(0,a.kt)("br",null)," \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u044b \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0443\u0442\u0438\u043b\u0438\u0442, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/lodash-es"},(0,a.kt)("inlineCode",{parentName:"a"},"lodash-es")),"."),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u041f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u043d\u044b\u0439 API-\u043a\u043b\u0438\u0435\u043d\u0442 \u0441 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0438\u043b\u0438 \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Entities"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u0421\u043a\u0435\u043b\u0435\u0442 \u0431\u0438\u0437\u043d\u0435\u0441-\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0441\u043e \u0441\u043b\u043e\u0442\u0430\u043c\u0438 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u044d\u0442\u043e\u0439 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u044d\u0442\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. ",(0,a.kt)("br",null)," \u042d\u0442\u043e\u0442 \u0441\u0435\u0433\u043c\u0435\u043d\u0442 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 ",(0,a.kt)("a",{parentName:"td",href:"https://tanstack.com/query/latest"},"TanStack Query")," \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u043d\u0435\u044f\u0432\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0435\u0433\u043c\u0435\u043d\u0442."),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0430\u0434 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u044d\u0442\u043e\u0439 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438, \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("td",{parentName:"tr",align:"left"},"API-\u043c\u0435\u0442\u043e\u0434\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0435 API-\u043a\u043b\u0438\u0435\u043d\u0442 \u0438\u0437 Shared \u0434\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0438 \u0441 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Features"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u0411\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0430 \u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0442\u0435\u043c\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f). \u0417\u0434\u0435\u0441\u044c \u043b\u0435\u0436\u0438\u0442 \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u0443 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u0418\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u044b\u0439 \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0443 ",(0,a.kt)("inlineCode",{parentName:"td"},"model")," \u0431\u043e\u043b\u0435\u0435 \u043a\u0440\u0430\u0442\u043a\u043e \u043e\u043f\u0438\u0441\u0430\u0442\u044c \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443"),(0,a.kt)("td",{parentName:"tr",align:"left"},"API-\u043c\u0435\u0442\u043e\u0434\u044b, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 \u044d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043d\u0430 \u0431\u044d\u043a\u0435\u043d\u0434\u0435. ",(0,a.kt)("br",null)," \u041c\u043e\u0436\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c API-\u043c\u0435\u0442\u043e\u0434\u044b \u0438\u0437 Entities.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Widgets"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f Entities \u0438 Features \u0432 \u0441\u0430\u043c\u043e\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. ",(0,a.kt)("br",null)," \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u0438 \u043e\u0448\u0438\u0431\u043e\u043a \u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u041d\u0435-\u0431\u0438\u0437\u043d\u0435\u0441-\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0436\u0435\u0441\u0442\u044b) \u0438 \u043f\u0440\u043e\u0447\u0438\u0439 \u043a\u043e\u0434, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u041e\u0431\u044b\u0447\u043d\u043e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0438\u043d\u0433\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("a",{parentName:"td",href:"https://remix.run"},"Remix"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Pages"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f Entities, Features \u0438 Widgets \u0432 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. ",(0,a.kt)("br",null)," \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u0438 \u043e\u0448\u0438\u0431\u043e\u043a \u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u041e\u0431\u044b\u0447\u043d\u043e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u041d\u0435-\u0431\u0438\u0437\u043d\u0435\u0441-\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0436\u0435\u0441\u0442\u044b) \u0438 \u043f\u0440\u043e\u0447\u0438\u0439 \u043a\u043e\u0434, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u043e\u0432, \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 SSR (\u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435)")))))}u.isMDXComponent=!0},7304:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/graphic-nested-slices-b9c44e6cc55ecdbf3e50bf40a61e5a27.svg"}}]);