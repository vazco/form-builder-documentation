"use strict";(self.webpackChunkform_builder_documentation=self.webpackChunkform_builder_documentation||[]).push([[206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,p=d["".concat(l,".").concat(f)]||d[f]||m[f]||i;return r?n.createElement(p,a(a({ref:t},u),{},{components:r})):n.createElement(p,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>D,contentTitle:()=>w,default:()=>P,frontMatter:()=>O,metadata:()=>E,toc:()=>j});var n=r(7462),o=r(7294),i=r(3905),a=r(6010),c=r(2802),l=r(9960),s=r(3919),u=r(5999);const m="cardContainer_fWXF",d="cardTitle_rnsV",f="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return o.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",m)},r)}function y(e){let{href:t,icon:r,title:n,description:i}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:n},r," ",n),i&&o.createElement("p",{className:(0,a.Z)("text--truncate",f),title:i},i))}function b(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?o.createElement(y,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return o.createElement(y,{href:t.href,icon:r,title:t.label,description:null==n?void 0:n.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(g,{item:t});case"category":return o.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,c.jA)();return o.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return o.createElement(v,e);const n=(0,c.MN)(t);return o.createElement("section",{className:(0,a.Z)("row",r)},n.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}const O={slug:"/"},w="Form Builder Documentation",E={unversionedId:"intro",id:"intro",title:"Form Builder Documentation",description:"Table of Content",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/form-builder-documentation/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"docs",next:{title:"Supported technologies",permalink:"/form-builder-documentation/supported-stack"}},D={},j=[{value:"Table of Content",id:"table-of-content",level:2},{value:"Coming soon",id:"coming-soon",level:2},{value:"We value your feedback!",id:"we-value-your-feedback",level:2}],x={toc:j};function P(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},x,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"form-builder-documentation"},"Form Builder Documentation"),(0,i.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,i.kt)(k,{mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"coming-soon"},"Coming soon"),(0,i.kt)(k,{items:[{type:"link",label:"Nesting of fields - coming soon",href:"#"},{type:"link",label:"Recipes / use cases - coming soon",href:"#"}],mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"we-value-your-feedback"},"We value your feedback!"),(0,i.kt)("p",null,"Please answer a few questions to make the Form Builder and documentation better."),(0,i.kt)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfpkZRy2TDDDmQZOMaL2BZPybdEY9ypgtU3tiMcQvMPY39cSA/viewform?embedded=true",width:"640",height:"1200",frameBorder:"0",marginHeight:"0",marginWidth:"0"},"Loading\u2026"))}P.isMDXComponent=!0}}]);