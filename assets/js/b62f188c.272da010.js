"use strict";(self.webpackChunkforminer=self.webpackChunkforminer||[]).push([[101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),h=i,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return t?a.createElement(c,r(r({ref:n},p),{},{components:t})):a.createElement(c,r({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=t(7462),i=(t(7294),t(3905)),o=t(506),r=t(2364),l=t(4408);const s={description:"Learn how the conditional rendering work"},d="Display If",p={unversionedId:"display-if",id:"version-1.0.0/display-if",title:"Display If",description:"Learn how the conditional rendering work",source:"@site/versioned_docs/version-1.0.0/display-if.mdx",sourceDirName:".",slug:"/display-if",permalink:"/docs/1.0.0/display-if",draft:!1,tags:[],version:"1.0.0",frontMatter:{description:"Learn how the conditional rendering work"},sidebar:"docs",previous:{title:"Form Definition",permalink:"/docs/1.0.0/form-definition"},next:{title:"Handling custom components",permalink:"/docs/1.0.0/custom-components"}},m={},u=[{value:"Expressions, operators &amp; conditions",id:"expressions-operators--conditions",level:2},{value:"Simple example",id:"simple-example",level:3},{value:"More complex example",id:"more-complex-example",level:3},{value:"Required only if visible",id:"required-only-if-visible",level:2},{value:"Serverside validation",id:"serverside-validation",level:2}],h={toc:u};function c(e){let{components:n,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"display-if"},"Display If"),(0,i.kt)("h2",{id:"expressions-operators--conditions"},"Expressions, operators & conditions"),(0,i.kt)("p",null,"DisplayIf allows conditional rendering of fields. That means that a given field will be rendered only if a specified condition is met. What's important is that a condition is an expression that evaluates to either true or false. Expressions are evaluated according to the specified operators, using operands (args)."),(0,i.kt)("p",null,"The list of supported operators is as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Expression type"),(0,i.kt)("th",{parentName:"tr",align:null},"Operators"),(0,i.kt)("th",{parentName:"tr",align:null},"Number of operands"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Logical"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AND"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"OR"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"NAND"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"NOR"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"XOR")),(0,i.kt)("td",{parentName:"tr",align:null},"Multiple")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Comparison"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"EQ"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"NOT_EQ"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"GT"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"GTE"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LT"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LTE")),(0,i.kt)("td",{parentName:"tr",align:null},"Two")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Literal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BOOLEAN_LITERAL"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"NUMBER_LITERAL"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"STRING_LITERAL")),(0,i.kt)("td",{parentName:"tr",align:null},"One")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Model"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"VALUE_OF"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LENGTH_OF")),(0,i.kt)("td",{parentName:"tr",align:null},"One")))),(0,i.kt)("h3",{id:"simple-example"},"Simple example"),(0,i.kt)("p",null,"Let's start simple. Imagine we have a form where we ask for feedback and we want to ask about potential improvements, but only if someone is not satisfied. Take a look at the form below:"),(0,i.kt)("video",{controls:!0},(0,i.kt)("source",{src:o.Z})),(0,i.kt)("p",null,"In this example, the text field is displayed only when the value of the boolean field is false. Let's take a look at the code representation of the form. Focus on the highlighted ",(0,i.kt)("inlineCode",{parentName:"p"},"displayIf"),"'s content defined for the text field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "views": [\n    {\n      "component": "AutoField",\n      "fieldId": "1",\n      "label": "Do you enjoy Forminer?",\n      "viewId": "1"\n    },\n    {\n      "component": "AutoField",\n      "fieldId": "2",\n      "label": "How can we improve it?",\n      "viewId": "2",\n      // highlight-start\n      "displayIf": {\n        "operator": "AND",\n        "args": [\n          {\n            "operator": "EQ",\n            "args": [\n              {\n                "operator": "VALUE_OF",\n                "args": [],\n                "primitiveArg": "enjoyedForminer"\n              },\n              {\n                "operator": "BOOLEAN_LITERAL",\n                "args": [],\n                "primitiveArg": false\n              }\n            ]\n          }\n        ]\n      }\n      // highlight-end\n    }\n  ],\n  "layouts": [\n    {\n      "name": "Page 1",\n      "layout": {\n        "kind": "Container",\n        "children": [\n          {\n            "kind": "Field",\n            "viewId": "1",\n            "layoutId": "2"\n          },\n          {\n            "kind": "Field",\n            "viewId": "2",\n            "layoutId": "3"\n          }\n        ],\n        "type": "List",\n        "config": {\n          "variant": "vertical"\n        },\n        "layoutId": "1"\n      }\n    }\n  ],\n  "schema": [\n    {\n      "fieldId": "1",\n      "name": "enjoyedForminer",\n      "type": "boolean",\n      "required": true,\n      "defaultValue": true\n    },\n    {\n      "fieldId": "2",\n      "name": "improvements",\n      "type": "string",\n      "required": true,\n      "defaultValue": "",\n      "minLength": 1\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Let's show this in a form of a diagram to see it clearer:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(7010).Z,width:"532",height:"291"})),(0,i.kt)("p",null,"On the root level, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"AND")," operator. It resolves to true once all of the child operands evaluate to true (notice that the operand is an expression, too!). In our case, there's only one child expression, ",(0,i.kt)("inlineCode",{parentName:"p"},"EQ"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"EQ")," is a comparison expression, it takes two operands and evaluates to true if they are equal. The first operand is a ",(0,i.kt)("inlineCode",{parentName:"p"},"VALUE_OF")," operator, which is used to evaluate a model expression. The second one is a ",(0,i.kt)("inlineCode",{parentName:"p"},"BOOLEAN_LITERAL")," operator, which counts a literal expression. Both model and literal expressions, instead of using the child expressions (stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"), use the ",(0,i.kt)("inlineCode",{parentName:"p"},"primitiveArg")," value to evaluate. ",(0,i.kt)("inlineCode",{parentName:"p"},"VALUE_OF")," gets a value under a ",(0,i.kt)("inlineCode",{parentName:"p"},"primitiveArg")," name from the model. ",(0,i.kt)("inlineCode",{parentName:"p"},"BOOLEAN_LITERAL")," simply returns a fixed boolean value."),(0,i.kt)("h3",{id:"more-complex-example"},"More complex example"),(0,i.kt)("p",null,"Let's expand on the previous form. Now we want to ask about potential improvements not only when someone is not satisfied, but also when he is willing to share them. Take a look:"),(0,i.kt)("video",{controls:!0},(0,i.kt)("source",{src:r.Z})),(0,i.kt)("p",null,"Here's the code of the form. The highlighted blocks are the newly added ones:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  "views": [\n    {\n      "component": "AutoField",\n      "fieldId": "1",\n      "label": "Do you enjoy Forminer?",\n      "viewId": "1"\n    },\n    {\n      "component": "AutoField",\n      "fieldId": "2",\n      "label": "How can we improve it?",\n      "viewId": "2",\n      "displayIf": {\n        "operator": "AND",\n        "args": [\n          {\n            "operator": "EQ",\n            "args": [\n              {\n                "operator": "VALUE_OF",\n                "args": [],\n                "primitiveArg": "enjoyedForminer"\n              },\n              {\n                "operator": "BOOLEAN_LITERAL",\n                "args": [],\n                "primitiveArg": false\n              }\n            ]\n          },\n          // highlight-start\n          {\n            "operator": "EQ",\n            "args": [\n              {\n                "operator": "VALUE_OF",\n                "args": [],\n                "primitiveArg": "willingToShareImprovements"\n              },\n              {\n                "operator": "BOOLEAN_LITERAL",\n                "args": [],\n                "primitiveArg": true\n              }\n            ]\n          }\n        ]\n      }\n    },\n    {\n      "component": "AutoField",\n      "fieldId": "3",\n      "label": "Are you willing to share the improvements?",\n      "viewId": "3",\n      "displayIf": {\n        "operator": "AND",\n        "args": [\n          {\n            "operator": "EQ",\n            "args": [\n              {\n                "operator": "VALUE_OF",\n                "args": [],\n                "primitiveArg": "enjoyedForminer"\n              },\n              {\n                "operator": "BOOLEAN_LITERAL",\n                "args": [],\n                "primitiveArg": false\n              }\n            ]\n          }\n        ]\n      }\n    }\n    // highlight-end\n  ],\n  "layouts": [\n    {\n      "name": "Page 1",\n      "layout": {\n        "kind": "Container",\n        "children": [\n          {\n            "kind": "Field",\n            "viewId": "1",\n            "layoutId": "2"\n          },\n          // highlight-start\n          {\n            "kind": "Field",\n            "viewId": "3",\n            "layoutId": "4"\n          },\n          // highlight-end\n          {\n            "kind": "Field",\n            "viewId": "2",\n            "layoutId": "3"\n          }\n        ],\n        "type": "List",\n        "config": {\n          "variant": "vertical"\n        },\n        "layoutId": "1"\n      }\n    }\n  ],\n  "schema": [\n    {\n      "fieldId": "1",\n      "name": "enjoyedForminer",\n      "type": "boolean",\n      "required": true,\n      "defaultValue": true\n    },\n    {\n      "fieldId": "2",\n      "name": "improvements",\n      "type": "string",\n      "required": true,\n      "defaultValue": "",\n      "minLength": 1\n    },\n    // highlight-start\n    {\n      "fieldId": "3",\n      "name": "willingToShareImprovements",\n      "type": "boolean",\n      "required": false\n    }\n    // highlight-end\n  ]\n}\n')),(0,i.kt)("p",null,'Notice two things. One is that now the "',(0,i.kt)("em",{parentName:"p"},'Are you willing to share the improvements?"')," field is using the same ",(0,i.kt)("inlineCode",{parentName:"p"},"displayIf")," condition we created previously. The second thing is that the condition responsible for displaying the text field now takes into account the newly added field as well. Take a look at the diagram:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3578).Z,width:"1221",height:"362"})),(0,i.kt)("h2",{id:"required-only-if-visible"},"Required only if visible"),(0,i.kt)("p",null,"In terms of validation, forms created with Forminer follow the rule ",(0,i.kt)("em",{parentName:"p"},"the field is required only if it's visible"),". It is best to see how it works with an example."),(0,i.kt)("p",null,'To demonstrate the thing, we will use the same form as in the "Simple example" from the "Expressions, operators & conditions" section. Please note that both fields are marked as required in the form schema. View the video below to see how the form behaves when we submit it:'),(0,i.kt)("video",{controls:!0},(0,i.kt)("source",{src:l.Z})),(0,i.kt)("p",null,"As you can see, the ",(0,i.kt)("inlineCode",{parentName:"p"},"enjoyedForminer")," field is always present in the submitted model, as it has a default value and it's not displayed conditionally."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"improvementsField")," though is present in the submitted model only when the field is visible. Once visible, it also affects the form validation, preventing it from submitting without a value set. You can also see, that when the displayIf condition is false and the field disappears, its value is preserved in the model (when we untick the checkbox, the value is already there, so there is no need to type it again)."),(0,i.kt)("p",null,"That's because the form model can be different from the submitted one. Before the model is submitted, it is transformed. In this case, the transformation is about evaluating the displayIf condition for every field. If the field is not visible, it is erased from the model. If you're interested, see the ",(0,i.kt)("inlineCode",{parentName:"p"},"modelTransform")," function in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Forminer/components/Form.tsx"),"."),(0,i.kt)("h2",{id:"serverside-validation"},"Serverside validation"),(0,i.kt)("p",null,"Forminer does not have its own backend as such, however, if want to, you can place the validation process on the server."),(0,i.kt)("p",null,"To validate a model, you need to create a validator. A validator is a function that receives a model and validates it against the schema, returning the list of errors. For example, ",(0,i.kt)("a",{parentName:"p",href:"https://ajv.js.org/"},"ajv")," is a popular JSON schema validator."),(0,i.kt)("p",null,"However, if your form uses displayIf, ajv won't work for you, as it simply doesn't understand what the displayIf is. So in order to validate the JSON schema with displayIf you have to use Forminer's ",(0,i.kt)("inlineCode",{parentName:"p"},"toValidator")," function. ",(0,i.kt)("inlineCode",{parentName:"p"},"toValidator")," takes two arguments, the first being the JSON schema and the second being the schema from the Forminer definition. This may sound confusing so let's see how it works with an example."),(0,i.kt)("p",null,'We will once again use the same form as in the "Simple example" from the "Expressions, operators & conditions" section.'),(0,i.kt)("p",null,"First, we extract the JSON schema using ",(0,i.kt)("inlineCode",{parentName:"p"},"makeBridge")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const jsonSchema = makeBridge(form.schema, form.views).schema;\n")),(0,i.kt)("p",null,"The resulting schema looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "textarea": {\n      "type": "object",\n      "properties": {}\n    },\n    "enjoyedForminer": {\n      "type": "boolean",\n      "title": "enjoyedForminer",\n      "default": true\n    },\n    "improvements": {\n      "type": "string",\n      "title": "improvements",\n      "displayIf": {\n        "operator": "AND",\n        "args": [\n          {\n            "operator": "EQ",\n            "args": [\n              {\n                "operator": "VALUE_OF",\n                "args": [],\n                "primitiveArg": "enjoyedForminer"\n              },\n              {\n                "operator": "BOOLEAN_LITERAL",\n                "args": [],\n                "primitiveArg": false\n              }\n            ]\n          }\n        ]\n      }\n    }\n  },\n  "required": ["enjoyedForminer", "improvements"]\n}\n')),(0,i.kt)("p",null,"Now, to create a validator, simply pass the resulting JSON schema and your form's schema to the ",(0,i.kt)("inlineCode",{parentName:"p"},"toValidator")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const validator = toValidator(jsonSchema, form.schema);\n")),(0,i.kt)("p",null,"And that's it! Now you can programmatically validate your model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// passes validation\nvalidator({ enjoyedForminer: true });\n\n// passes validation\nvalidator({ enjoyedForminer: true, improvements: 'whatever' });\n\n// does not pass validation\nvalidator({ enjoyedForminer: false });\n\n// does not pass validation\nvalidator({ enjoyedForminer: false, improvements: false });\n\n// passes validation\nvalidator({ enjoyedForminer: false, improvements: 'whatever' });\n")),(0,i.kt)("p",null,"As you can see, the model is properly validated in each case. Please have in mind that this works because we used our own custom validator, designed to handle the displayIf. Nevertheless, the schema is a perfectly valid JSON schema so if you are not using the displayIf feature, you are safe to use any other validator."),(0,i.kt)("p",null,"However, if you're happy to use the Forminer's validator, then actually there is a shorthand for it. Take a look:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const { validator } = makeBridge(form.schema, form.views);\n")))}c.isMDXComponent=!0},506:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/medias/11304976-249c996ea2b27e1f522c75adfd5501cb.mp4"},2364:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/medias/11698191-a884dc5cbd6c1d86f9e2db0db33ed82e.mp4"},4408:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/medias/13762563-0f8ddbba2e74c0a9a6f6c207c7172383.mp4"},7010:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/11337744-5e2504e4fd456fe1367c60b7152e80d9.webp"},3578:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/11567123-b6859f008a0f1658d9c31f096db67ef6.webp"}}]);