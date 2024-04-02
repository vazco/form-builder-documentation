"use strict";(self.webpackChunkforminer=self.webpackChunkforminer||[]).push([[963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={description:"Check minimum required versions to use Forminer"},a="Technical requirements",s={unversionedId:"technical-requirements",id:"technical-requirements",title:"Technical requirements",description:"Check minimum required versions to use Forminer",source:"@site/docs/technical-requirements.mdx",sourceDirName:".",slug:"/technical-requirements",permalink:"/docs/technical-requirements",draft:!1,tags:[],version:"current",frontMatter:{description:"Check minimum required versions to use Forminer"},sidebar:"docs",previous:{title:"Supported technologies",permalink:"/docs/supported-stack"},next:{title:"Installation",permalink:"/docs/installation"}},c={},l=[{value:"Prerequistences",id:"prerequistences",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"technical-requirements"},"Technical requirements"),(0,i.kt)("h2",{id:"prerequistences"},"Prerequistences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 14 or above (which can be checked by running ",(0,i.kt)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://react.dev/"},"React")," version 17 or above")),(0,i.kt)("p",null,"Our current implementation uses Node.js 20. Choosing it will help you to eliminate issues related to the installation of the package and its' usage."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Forminer needs one of the ",(0,i.kt)("a",{parentName:"p",href:"https://uniforms.tools/docs/installation/"},"uniforms themes"),". You can also create your own ",(0,i.kt)("a",{parentName:"p",href:"https://uniforms.tools/docs/tutorials-creating-custom-theme/"},"custom uniforms theme"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"uniforms-???@3.10.2 // One of the uniforms themes.\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("admonition",{title:"Does Forminer support the latest version of React?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Currently we support React 17 and 18.")),(0,i.kt)("admonition",{title:"What version of uniforms theme is required?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"3.10.2")),(0,i.kt)("admonition",{title:"How can technical requirements change in the future?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"React and uniforms are the foundations of Forminer and it's unquestionable that they always will be. Packages and their versions might be changed in the future.")),(0,i.kt)("admonition",{title:"How can I make sure that Forminer is compatible?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Check your Node.js, React, and uniforms theme versions.")))}m.isMDXComponent=!0}}]);