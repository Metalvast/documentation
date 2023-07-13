"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3906],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4396:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(6600),r=(a(9496),a(9613));const o={sidebar_position:20,pagination_next:"guides/index"},i="FAQ",l={unversionedId:"get-started/faq",id:"get-started/faq",title:"FAQ",description:"You can ask your question in telegram chat / github-issues / github-discussions",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get-started/faq.md",sourceDirName:"get-started",slug:"/get-started/faq",permalink:"/docs/get-started/faq",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/get-started/faq.md",tags:[],version:"current",lastUpdatedAt:1689247643,formattedLastUpdatedAt:"Jul 13, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20,pagination_next:"guides/index"},sidebar:"getstartedSidebar",previous:{title:"Decomposition cheatsheet",permalink:"/docs/get-started/cheatsheet"},next:{title:"\ud83c\udfaf Guides",permalink:"/docs/guides/"}},s={},u=[{value:"Structure = Architecture?",id:"structure--architecture",level:3},{value:"Do I need a methodology only for &quot;understanding and clarity&quot; of what is happening in the project?",id:"do-i-need-a-methodology-only-for-understanding-and-clarity-of-what-is-happening-in-the-project",level:3},{value:"Does a novice developer need an architecture/methodology?",id:"does-a-novice-developer-need-an-architecturemethodology",level:3},{value:"Why do we need another methodology when everything is based on principles?",id:"why-do-we-need-another-methodology-when-everything-is-based-on-principles",level:3},{value:"Where can I find examples of applying the methodology?",id:"where-can-i-find-examples-of-applying-the-methodology",level:3},{value:"Are there some useful resources / articles / etc about FSD and related things?",id:"are-there-some-useful-resources--articles--etc-about-fsd-and-related-things",level:3},{value:"The project is written on feature-slices v1, how to update and is it worth it?",id:"the-project-is-written-on-feature-slices-v1-how-to-update-and-is-it-worth-it",level:3},{value:"Can I embed pages/features/entities into each other?",id:"can-i-embed-pagesfeaturesentities-into-each-other",level:3},{value:"How do I work with the authorization context?",id:"how-do-i-work-with-the-authorization-context",level:3},{value:"What about Atomic Design?",id:"what-about-atomic-design",level:3},{value:"What is the difference between feature and entity?",id:"what-is-the-difference-between-feature-and-entity",level:3},{value:"Where to store the layout/template of pages?",id:"where-to-store-the-layouttemplate-of-pages",level:3},{value:"Will there be a toolkit / linters?",id:"will-there-be-a-toolkit--linters",level:3},{value:"Can I store the features used on one page directly in the page directory?",id:"can-i-store-the-features-used-on-one-page-directly-in-the-page-directory",level:3}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can ask your question in ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced"},"telegram chat")," / ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/issues"},"github-issues")," / ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions"},"github-discussions"))),(0,r.kt)("h3",{id:"structure--architecture"},"Structure = Architecture?"),(0,r.kt)("p",null,"Architecture defines abstractions and relations between them (shared/features/pages/...)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"But without a proper structure, it's difficult to design a good architecture")),(0,r.kt)("h3",{id:"do-i-need-a-methodology-only-for-understanding-and-clarity-of-what-is-happening-in-the-project"},'Do I need a methodology only for "understanding and clarity" of what is happening in the project?'),(0,r.kt)("p",null,"Rather yes than no"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Otherwise, you have to read huge directories ",(0,r.kt)("inlineCode",{parentName:"em"},"components/"),"...")),(0,r.kt)("h3",{id:"does-a-novice-developer-need-an-architecturemethodology"},"Does a novice developer need an architecture/methodology?"),(0,r.kt)("p",null,"Rather yes than no"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Usually, when you design and develop a project in one person, everything goes smoothly. But if there are pauses in development, new developers are added to the team - then problems come")),(0,r.kt)("h3",{id:"why-do-we-need-another-methodology-when-everything-is-based-on-principles"},"Why do we need another methodology when everything is based on principles?"),(0,r.kt)("p",null,"Answered ",(0,r.kt)("a",{parentName:"p",href:"/docs/about/motivation"},"here")),(0,r.kt)("h3",{id:"where-can-i-find-examples-of-applying-the-methodology"},"Where can I find examples of applying the methodology?"),(0,r.kt)("p",null,"There are only such ones in the public domain so far, not all of them have been fully adapted to the latest version"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"In the near future, the list will be updated and will be placed in a separate section")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/examples"},"Internal Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/examples"},"External Examples"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Also, you can get acquainted with our ",(0,r.kt)("a",{parentName:"em",href:"/docs/guides"},"guides")," and ",(0,r.kt)("a",{parentName:"em",href:"/docs/get-started"},"tutorials"))),(0,r.kt)("h3",{id:"are-there-some-useful-resources--articles--etc-about-fsd-and-related-things"},"Are there some useful resources / articles / etc about FSD and related things?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/awesome"},"https://github.com/feature-sliced/awesome")),(0,r.kt)("h3",{id:"the-project-is-written-on-feature-slices-v1-how-to-update-and-is-it-worth-it"},"The project is written on feature-slices v1, how to update and is it worth it?"),(0,r.kt)("p",null,"Answered ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/migration/from-v1"},"here")),(0,r.kt)("h3",{id:"can-i-embed-pagesfeaturesentities-into-each-other"},"Can I embed pages/features/entities into each other?"),(0,r.kt)("p",null,"Answered ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/slices-segments#slices"},"here")),(0,r.kt)("h3",{id:"how-do-i-work-with-the-authorization-context"},"How do I work with the authorization context?"),(0,r.kt)("p",null,"Answered ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/examples/auth"},"here")),(0,r.kt)("h3",{id:"what-about-atomic-design"},"What about Atomic Design?"),(0,r.kt)("p",null,"The current version of the methodology does not oblige, but also does not prohibit the use of Atomic Design together with Feature-Sliced Design"),(0,r.kt)("p",null,"At the same time, Atomic Design ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/1653"},"is well applied")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ui")," segment of modules"),(0,r.kt)("h3",{id:"what-is-the-difference-between-feature-and-entity"},"What is the difference between feature and entity?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Entity")," - business ",(0,r.kt)("strong",{parentName:"li"},"entity"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"blog-post / user / order / product / ..."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Feature")," - business feature, ",(0,r.kt)("strong",{parentName:"li"},"action on an entity"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"create-blog-post / login-by-oauth / edit-account / publish-video / ...")))),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/layers"},"comparison reference"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/examples/auth"},"viewer implementation of logic by layers")),(0,r.kt)("h3",{id:"where-to-store-the-layouttemplate-of-pages"},"Where to store the layout/template of pages?"),(0,r.kt)("p",null,"It is better to store general templates for markup in ",(0,r.kt)("inlineCode",{parentName:"p"},"shared/ui"),", but there are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/129"},"different cases")),(0,r.kt)("h3",{id:"will-there-be-a-toolkit--linters"},"Will there be a toolkit / linters?"),(0,r.kt)("p",null,"It will be, at the moment - in development =)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For now, to sort / prohibit imports, you can use"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eslint-plugin-import")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eslint-plugin-simple-import-sort")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eslint-plugin-boundaries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dependency-cruiser"))),(0,r.kt)("p",{parentName:"blockquote"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/azinit/4cb940a1d4a3e05ef47e15aa18a9ecc5"},"basic config example"))),(0,r.kt)("h3",{id:"can-i-store-the-features-used-on-one-page-directly-in-the-page-directory"},"Can I store the features used on one page directly in the page directory?"),(0,r.kt)("p",null,"The methodology strongly recommends against doing this, since each module has a corresponding place in the structure."),(0,r.kt)("p",null,"Otherwise , there is a risk of complicating the project's code base"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'"Today, the feature can only be used on one page. Next week - on three. And in a month - it may be removed at all. We cannot predict the future, and we need to refrain from premature optimizations every time"'))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also the example from ",(0,r.kt)("a",{parentName:"em",href:"/docs/get-started/tutorial#normal-approach"},"tutorial"))))}p.isMDXComponent=!0}}]);