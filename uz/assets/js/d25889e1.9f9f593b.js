"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[1144],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7622),i=(n(9496),n(9613));const r={sidebar_position:1},o="Overview",s={unversionedId:"get-started/overview",id:"get-started/overview",title:"Overview",description:"Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get-started/overview.md",sourceDirName:"get-started",slug:"/get-started/overview",permalink:"/uz/docs/get-started/overview",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/get-started/overview.md",tags:[],version:"current",lastUpdatedAt:1693737994,formattedLastUpdatedAt:"3-sen, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"getstartedSidebar",previous:{title:"\ud83d\ude80 Get Started",permalink:"/uz/docs/get-started/"},next:{title:"Tutorial",permalink:"/uz/docs/get-started/tutorial"}},l={},p=[{value:"Is it right for me?",id:"is-it-right-for-me",level:2},{value:"Basics",id:"basics",level:2},{value:"Example",id:"example",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Incremental adoption",id:"incremental-adoption",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Feature-Sliced Design")," (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements."),(0,i.kt)("h2",{id:"is-it-right-for-me"},"Is it right for me?"),(0,i.kt)("p",null,"FSD can be implemented in projects and teams of any size, but there are a few things to keep in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This methodology is for front-end projects only. If you're looking for a back-end architecture, consider ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/codex/clean-architecture-for-dummies-df6561d42c94"},"Clean Architecture"),"."),(0,i.kt)("li",{parentName:"ul"},"This methodology is for user-facing applications only. For inspiration on how to architect a large UI kit, see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mui/material-ui"},"Material UI"),"."),(0,i.kt)("li",{parentName:"ul"},"A very simple app of a single page might not need the benefits of FSD and suffer from the overhead. However, FSD promotes a nice way of thinking, so feel free to use it on the tiniest projects if you want."),(0,i.kt)("li",{parentName:"ul"},"A huge app, the size of the Google Cloud admin dashboard, will require a custom architecture. It could still be based on FSD, by the way.")),(0,i.kt)("p",null,"FSD doesn't enforce a particular programming language, UI framework or state manager \u2014 bring your own or see some ",(0,i.kt)("a",{parentName:"p",href:"/examples"},"examples"),"."),(0,i.kt)("p",null,"If you have an existing project, fear not \u2014 FSD can be adopted incrementally. Just make sure that your team is ",(0,i.kt)("strong",{parentName:"p"},"in","\xa0","pain")," from the current architecture, otherwise a switch might not be worth it. For migration guidance, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/migration"},"Migration section"),"."),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,"In FSD, a project consists of ",(0,i.kt)("mark",null,"layers"),", each layer is made up of ",(0,i.kt)("mark",null,"slices")," and each slice is made up of ",(0,i.kt)("mark",null,"segments"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"themed--scheme",src:n(137).Z,width:"1355",height:"754"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"layers")," are standardized across all projects and vertically arranged. Modules on one layer can only interact with modules from the layers strictly below. There are currently seven of them (bottom to top):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"shared")," \u2014 reusable functionality, detached from the specifics of the project/business.",(0,i.kt)("small",null,"(e.g. UIKit, libs, API)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"entities")," \u2014 business entities.",(0,i.kt)("small",null,"(e.g., User, Product, Order)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"features")," \u2014 user interactions, actions that bring business value to the user.",(0,i.kt)("small",null,"(e.g. SendComment, AddToCart, UsersSearch)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"widgets")," \u2014 compositional layer to combine entities and features into meaningful blocks.",(0,i.kt)("small",null,"(e.g. IssuesList, UserProfile)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pages")," \u2014 compositional layer to construct full pages from entities, features and widgets."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"processes")," (deprecated) \u2014 complex inter-page scenarios. ",(0,i.kt)("small",null,"(e.g., authentication)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"app")," \u2014 app-wide settings, styles and providers.")),(0,i.kt)("p",null,"Then there are ",(0,i.kt)("strong",{parentName:"p"},"slices"),", which partition the code by business domain. This makes your codebase easy to navigate by keeping logically related modules close together. Slices cannot use other slices on the same layer, and that helps with high cohesion and low coupling."),(0,i.kt)("p",null,"Each slice, in turn, consists of ",(0,i.kt)("strong",{parentName:"p"},"segments"),". These are tiny modules that are meant to help with separating code within a slice by its technical purpose. The most common segments are ",(0,i.kt)("inlineCode",{parentName:"p"},"ui"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," (store,  actions), ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," (utils/hooks), but you can omit some or add more, as you see fit."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In most cases, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions/66"},"it is recommended")," to place ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," only in the shared layer, unless your API client is also your storage (GraphQL, TanStack Query, etc.)")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's consider a social network application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app/")," contains setup of routing, store and global styles."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/")," contains the route components for each page in the app, mostly composition, hardly any logic.")),(0,i.kt)("p",null,"Within that application, let's consider a post card in a news feed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"widgets/"),' contains the "assembled" post card, with content and interactive buttons that are wired up to the relevant calls on the back-end.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"features/")," contains the interactivity of the card (e.g., like button) and the logic of processing those interactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entities/")," contains the shell of the card with slots for content and the interactive elements. The tile representing the post author is also here, but in a different slice.")),(0,i.kt)("h2",{id:"advantages"},"Advantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Uniformity"),(0,i.kt)("br",{parentName:"p"}),"\n","The code is organized by scope of influence (layers), by domain (slices), and by technical purpose (segments).",(0,i.kt)("br",{parentName:"p"}),"\n","This creates a standardized architecture that is easy to comprehend for newcomers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Controlled reuse of logic"),(0,i.kt)("br",{parentName:"p"}),"\n","Each architectural component has its purpose and predictable dependencies.",(0,i.kt)("br",{parentName:"p"}),"\n","This keeps a balance between following the ",(0,i.kt)("strong",{parentName:"p"},"DRY")," principle and adaptation possibilities. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Stability in face of changes and refactoring"),(0,i.kt)("br",{parentName:"p"}),"\n","A module on a particular layer cannot use other modules on the same layer, or the layers above.",(0,i.kt)("br",{parentName:"p"}),"\n","This enables isolated modifications without unforeseen consequences.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Orientation to business and users needs"),(0,i.kt)("br",{parentName:"p"}),"\n","When the app is split into business domains, you can navigate the code to discover and deeper understand all the project features."))),(0,i.kt)("h2",{id:"incremental-adoption"},"Incremental adoption"),(0,i.kt)("p",null,"The power of FSD lies in ",(0,i.kt)("em",{parentName:"p"},"structured")," decomposition. At its finest, it enables to locate any part of code near-deterministically. However, the level of decomposition is a parameter, and each team can tweak it to strike a balance between simple adoption and the amount of benefits."),(0,i.kt)("p",null,"Here's a proposed strategy to migrate an existing codebase to FSD, based on experience:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start by outlining the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"shared")," layers to create a foundation. Usually, these layers are the smallest.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Distribute all of the existing UI across ",(0,i.kt)("inlineCode",{parentName:"p"},"widgets")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pages"),", even if they have dependencies that violate the rules of FSD.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start gradually increasing the precision of decomposition by separating ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"entities"),", turning pages and widgets from logic-bearing layers into purely compositional layers."))),(0,i.kt)("p",null,"It's advised to refrain from adding new large entities while refactoring or refactoring only certain parts of the project."))}m.isMDXComponent=!0},137:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg"}}]);