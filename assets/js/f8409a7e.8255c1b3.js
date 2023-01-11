"use strict";(self.webpackChunkform_builder=self.webpackChunkform_builder||[]).push([[206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,p=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return r?n.createElement(p,a(a({ref:t},d),{},{components:r})):n.createElement(p,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>k,default:()=>C,frontMatter:()=>O,metadata:()=>E,toc:()=>x});var n=r(7462),o=r(7294),i=r(3905),a=r(6010),l=r(2802),c=r(9960),s=r(3919),d=r(5999);const f="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return o.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",f)},r)}function h(e){let{href:t,icon:r,title:n,description:i}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:n},r," ",n),i&&o.createElement("p",{className:(0,a.Z)("text--truncate",u),title:i},i))}function y(e){let{item:t}=e;const r=(0,l.Wl)(t);return r?o.createElement(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,l.xz)(t.docId??void 0);return o.createElement(h,{href:t.href,icon:r,title:t.label,description:null==n?void 0:n.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(b,{item:t});case"category":return o.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,l.jA)();return o.createElement(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return o.createElement(v,e);const n=(0,l.MN)(t);return o.createElement("section",{className:(0,a.Z)("row",r)},n.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(g,{item:e})))))}const O={slug:"/",hide_table_of_contents:!0},k="What is Form Builder?",E={unversionedId:"intro",id:"intro",title:"What is Form Builder?",description:"Vazco Form Builder is a powerful tool for building forms in React, it offers a drag-and-drop interface for building forms, with nested fields, vertical and horizontal lists, and supports all common field types.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/form-builder/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/",hide_table_of_contents:!0},sidebar:"docs",next:{title:"What is Form Builder?",permalink:"/form-builder/what-is-form-builder"}},j={},x=[{value:"Table of Content",id:"table-of-content",level:2},{value:"Coming soon",id:"coming-soon",level:2}],T={toc:x};function C(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},T,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-form-builder"},"What is Form Builder?"),(0,i.kt)("p",null,"Vazco Form Builder is a powerful tool for building forms in React, it offers a drag-and-drop interface for building forms, with nested fields, vertical and horizontal lists, and supports all common field types.\nWith its package, it offers the ability to build forms in a fraction of time of the traditional development, it is easy to customize and modify the look by editing the CSS.\nIt also supports conditional field validation which helps to save time and focus on other areas of the project.\nThe package also allows adding new custom fields, and has a schema-based headless approach which allows preparing React forms once and use them with various themes.\nThe package is well-documented, easy to integrate and based on uniforms, and offers a traffic-independent payment model."),(0,i.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,i.kt)(w,{mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"coming-soon"},"Coming soon"),(0,i.kt)(w,{items:[{type:"link",label:"Nesting of fields - coming soon",href:"#"},{type:"link",label:"Recipes / use cases - coming soon",href:"#"}],mdxType:"DocCardList"}))}C.isMDXComponent=!0}}]);