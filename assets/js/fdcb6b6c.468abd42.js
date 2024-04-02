"use strict";(self.webpackChunkforminer=self.webpackChunkforminer||[]).push([[933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),u=i,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var r=n(7462),i=(n(7294),n(3905)),o=n(3848);const a=n.p+"assets/medias/15237133-de6eb2df623adce76739373cf579490e.mov",s=n.p+"assets/medias/15138835-9dd23a430be3c83cc22fef1fb19043f8.mov",l={description:"How Forminer can works with lists"},p="Handling lists",c={unversionedId:"handling-lists",id:"version-1.0.0/handling-lists",title:"Handling lists",description:"How Forminer can works with lists",source:"@site/versioned_docs/version-1.0.0/handling-lists.mdx",sourceDirName:".",slug:"/handling-lists",permalink:"/docs/1.0.0/handling-lists",draft:!1,tags:[],version:"1.0.0",frontMatter:{description:"How Forminer can works with lists"},sidebar:"docs",previous:{title:"Handling custom components",permalink:"/docs/1.0.0/custom-components"},next:{title:"Translations (i18n)",permalink:"/docs/1.0.0/translations"}},d={},f=[{value:"List of inputs",id:"list-of-inputs",level:2},{value:"Dropdown with multiple values",id:"dropdown-with-multiple-values",level:2},{value:"Other variants",id:"other-variants",level:2}],u={toc:f};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"handling-lists"},"Handling lists"),(0,i.kt)("p",null,"Forminer does not handle lists (array data type) out-of-the-box, but it's possible to work around it. In this guide we'll look into a couple of common form patterns."),(0,i.kt)("h2",{id:"list-of-inputs"},"List of inputs"),(0,i.kt)("p",null,"The most basic list would be a list of inputs. It looks as follows:"),(0,i.kt)("video",{controls:!0},(0,i.kt)("source",{src:o.Z})),(0,i.kt)("p",null,"To make it usable, we have to patch the ",(0,i.kt)("inlineCode",{parentName:"p"},"makeBridge")," function that builds the final form's JSON schema definition out of the Forminer's form definition. The change is fairly small:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"}," // Actually register the field.\n-jsonSchema.properties[name] = definition;\n+if (view?.props?.isMulti) {\n+  jsonSchema.properties[name] = { type: 'array', items: definition };\n+} else {\n+  jsonSchema.properties[name] = definition;\n+}\n")),(0,i.kt)("p",null,"Now all we have to do is to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"isMulti")," custom property on any of the inputs:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(696).Z,width:"287",height:"154"})),(0,i.kt)("h2",{id:"dropdown-with-multiple-values"},"Dropdown with multiple values"),(0,i.kt)("p",null,"Another popular list input is a dropdown with multiple values. Normally, a dropdown allows us to select only a single value. If we'd add a standard Forminer's dropdown and apply the \"List of inputs\" workaround, we'd get the following result:"),(0,i.kt)("video",{controls:!0},(0,i.kt)("source",{src:a})),(0,i.kt)("p",null,"While perfectly suitable for some cases, it doesn't make sense for others. Instead, we'd like to have a dropdown that allows selecting multiple values. All of the uniforms themes do handle it, but it has to be configured. To make it work, we'll adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"makeBridge")," helper similarly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"// Actually register the field.\n-jsonSchema.properties[name] = definition;\n+if (view?.props?.isMulti) {\n+  jsonSchema.properties[name] = { type: 'array', items: definition };\n+  if (definition.enum) {\n+    jsonSchema.properties[name].default = [];\n+    jsonSchema.properties[name].uniforms = { allowedValues: definition.enum };\n+    delete definition.enum;\n+  }\n+} else {\n+  jsonSchema.properties[name] = definition;\n+}\n")),(0,i.kt)("p",null,"Now we need to select the ",(0,i.kt)("inlineCode",{parentName:"p"},"SelectField")," component as well as set the ",(0,i.kt)("inlineCode",{parentName:"p"},"isMulti: true")," custom property:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9673).Z,width:"286",height:"541"})),(0,i.kt)("video",{controls:!0},(0,i.kt)("source",{src:s})),(0,i.kt)("h2",{id:"other-variants"},"Other variants"),(0,i.kt)("p",null,"There's a lot of other possibilities to handle list inputs and we can't cover all of them in this guide. All of them have to consist of two parts: making sure that the JSON schema correctly validates our list, and the component renders it as we'd like. The former can be based on the examples above. The latter requires custom components (see ",(0,i.kt)("a",{parentName:"p",href:"custom-components"},"Handling custom components")," for details)."))}m.isMDXComponent=!0},3848:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/medias/15564803-a660abbbc540ea7668845c2e5dbc0c33.mov"},696:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/webp;base64,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"},9673:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/15400974-5d1ee450bcd2d7927b3d71e54cf739c5.webp"}}]);