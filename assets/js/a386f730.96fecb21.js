"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[9377],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,h=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4523:(e,t,a)=>{a.d(t,{ZP:()=>s});var r=a(7622),n=a(9496),i=a(9613),o=a(9028),l=a(6558);const c=e=>{let{ticket:t}=e;const a=`https://github.com/feature-sliced/documentation/issues/${t}`;return n.createElement("div",null,n.createElement("p",null,(0,l.I)({id:"shared.wip.title"})),n.createElement("p",null,(0,l.I)({id:"shared.wip.subtitle"})),n.createElement("ul",null,n.createElement("li",null,(0,l.I)({id:"shared.wip.var.feedback.base"}),n.createElement(o.Z,{to:a},(0,l.I)({id:"shared.wip.var.feedback.link"}))),n.createElement("li",null,(0,l.I)({id:"shared.wip.var.material.base"}),n.createElement(o.Z,{to:"https://t.me/feature_sliced"},(0,l.I)({id:"shared.wip.var.material.link"}))),n.createElement("li",null,(0,l.I)({id:"shared.wip.var.contribute.base"}),n.createElement(o.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,l.I)({id:"shared.wip.var.contribute.link"})))),n.createElement("br",null),n.createElement("p",null,n.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},u={toc:[]},p="wrapper";function s(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"WIP",type:"caution"},(0,i.kt)(c,{ticket:a.ticket,mdxType:"WIP"})))}s.isMDXComponent=!0},7651:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(7622),n=(a(9496),a(9613)),i=a(4523);const o={sidebar_class_name:"sidebar-item--wip",sidebar_position:3},l="Alternatives",c={unversionedId:"about/alternatives",id:"about/alternatives",title:"Alternatives",description:"History of architecture approaches",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/about/alternatives.mdx",sourceDirName:"about",slug:"/about/alternatives",permalink:"/docs/about/alternatives",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/about/alternatives.mdx",tags:[],version:"current",lastUpdatedAt:1693737994,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:3,frontMatter:{sidebar_class_name:"sidebar-item--wip",sidebar_position:3},sidebar:"aboutSidebar",previous:{title:"Motivation",permalink:"/docs/about/motivation"},next:{title:"About architecture",permalink:"/docs/about/understanding/architecture"}},u={},p=[{value:"Big Ball of Mud",id:"big-ball-of-mud",level:2},{value:"Smart &amp; Dumb components",id:"smart--dumb-components",level:2},{value:"Design Principles",id:"design-principles",level:2},{value:"DDD",id:"ddd",level:2},{value:"Clean Architecture",id:"clean-architecture",level:2},{value:"Frameworks",id:"frameworks",level:2},{value:"Atomic Design",id:"atomic-design",level:2},{value:"Feature Driven",id:"feature-driven",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"alternatives"},"Alternatives"),(0,n.kt)(i.ZP,{ticket:"62",mdxType:"WIP"}),(0,n.kt)("p",null,"History of architecture approaches"),(0,n.kt)("h2",{id:"big-ball-of-mud"},"Big Ball of Mud"),(0,n.kt)(i.ZP,{ticket:"258",mdxType:"WIP"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"What is it; Why is it so common; When it starts to bring problems; What to do and how does FSD help in this")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://oleg008.medium.com/last-words-on-ui-architecture-before-an-ai-takes-over-468c78f18f0d"},"(Article) Oleg Isonen - Last words on UI architecture before an AI takes over")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://youtu.be/gna4Ynz1YNI"},"(Report) Julia Nikolaeva, iSpring - Big Ball of Mud and other problems of the monolith, we have handled")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://thedomaindrivendesign.io/big-ball-of-mud/"},"(Article) DD - Big Ball of mud"))),(0,n.kt)("h2",{id:"smart--dumb-components"},"Smart & Dumb components"),(0,n.kt)(i.ZP,{ticket:"214",mdxType:"WIP"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"About the approach; About applicability in the frontend; Methodology position")),(0,n.kt)("p",null,"About obsolescence, about a new view from the methodology"),(0,n.kt)("p",null,"Why component-containers approach is evil?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"},"(Article) Den Abramov-Presentation and Container Components (TLDR: deprecated)"))),(0,n.kt)("h2",{id:"design-principles"},"Design Principles"),(0,n.kt)(i.ZP,{ticket:"59",mdxType:"WIP"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"What are we talking about; FSD position")),(0,n.kt)("p",null,"SOLID, GRASP, KISS, YAGNI, ... - and why they don't work well together in practice"),(0,n.kt)("p",null,"And how does it aggregate these practices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/SnzPAr_FJ7w?t=380"},"(Talk) Ilya Azin - Feature-Sliced Design (fragment about Design Principles)"))),(0,n.kt)("h2",{id:"ddd"},"DDD"),(0,n.kt)(i.ZP,{ticket:"1",mdxType:"WIP"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"About the approach; Why does it work poorly in practice")),(0,n.kt)("p",null,"What is the difference, how does it improve applicability, where does it adopt practices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/"},"(Article) DDD, Hexagonal, Onion, Clean, CQRS, ... How I put it all together")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/SnzPAr_FJ7w?t=528"},"(Talk) Ilya Azin - Feature-Sliced Design (fragment about Clean Architecture, DDD)"))),(0,n.kt)("h2",{id:"clean-architecture"},"Clean Architecture"),(0,n.kt)(i.ZP,{ticket:"165",mdxType:"WIP"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"About the approach; About applicability in the frontend; FSD position")),(0,n.kt)("p",null,"How are they similar (to many), how are they different"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3897"},"(Thread) About use-case/interactor in the methodology")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/4592"},"(Thread) About DI in the methodology")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bespoyasov.ru/blog/clean-architecture-on-frontend/"},"(Article) Alexander Bespalov - Clean Architecture on frontend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/"},"(Article) DDD, Hexagonal, Onion, Clean, CQRS, ... How I put it all together")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/SnzPAr_FJ7w?t=528"},"(Talk) Ilya Azin - Feature-Sliced Design (fragment about Clean Architecture, DDD)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://habr.com/ru/company/mobileup/blog/335382/"},"(Article) Misconceptions of Clean Architecture"))),(0,n.kt)("h2",{id:"frameworks"},"Frameworks"),(0,n.kt)(i.ZP,{ticket:"58",mdxType:"WIP"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"About applicability in the frontend; Why frameworks do not solve problems; why there is no single approach; FSD position")),(0,n.kt)("p",null,"Framework-agnostic, conventional-approach"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/about/motivation"},"(Article) About the reasons for creating the methodology (fragment about frameworks)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/3867"},"(Thread) About the applicability of the methodology for different frameworks"))),(0,n.kt)("h2",{id:"atomic-design"},"Atomic Design"),(0,n.kt)(i.ZP,{ticket:"204",mdxType:"WIP"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"About the approach; About applicability in the frontend; FSD position")),(0,n.kt)("p",null,"About compatibility, applicability in methodology and scope of responsibility, mapping layers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://atomicdesign.bradfrost.com/table-of-contents/"},"Atomic Design Methodology")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/1653"},"(Thread) About applicability in shared / ui")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/Yi-A20x2dcA"},"(Video) Briefly about Atomic Design")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/SnzPAr_FJ7w?t=587"},"(Talk) Ilya Azin - Feature-Sliced Design (fragment about Atomic Design)"))),(0,n.kt)("h2",{id:"feature-driven"},"Feature Driven"),(0,n.kt)(i.ZP,{ticket:"219",mdxType:"WIP"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"About the approach; About applicability in the frontend; FSD position")),(0,n.kt)("p",null,"About compatibility, historical development and comparison"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/BWAeYuWFHhs"},"(Talk) Oleg Isonen - Feature Driven Architecture")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/tree/rc/feature-driven"},"Feature Driven-Short specification (from the point of view of FSD)"))))}d.isMDXComponent=!0}}]);