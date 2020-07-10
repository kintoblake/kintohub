(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(198)),i={title:"Gatsby Example",sidebar_label:"Gatsby"},c={id:"examples/gatsby/tutorial",isDocsHomePage:!1,title:"Gatsby Example",description:"Gatsby static site example",source:"@site/docs/examples/gatsby/tutorial.md",permalink:"/examples/gatsby/tutorial",sidebar_label:"Gatsby"},l=[{value:"Overview",id:"overview",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/examples/gatsby/preview.png",alt:"Gatsby static site example"}))),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Gatsby makes it easy to build websites and apps based on React. Taking a static gastby website and deploying it on KintoHub couldn't be easier!"),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Apply this template to your ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kintohub/gatsby-example/generate"}),"Github")),Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://beta.kintohub.com/app/dashboard/"}),"Website KintoBlock")),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"name")," of your kinto block"),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("strong",{parentName:"li"},"Static from build")," as your type"),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"Node.js")," as the ",Object(o.b)("strong",{parentName:"li"},"language")," and ",Object(o.b)("inlineCode",{parentName:"li"},"11.7.0")," as the ",Object(o.b)("strong",{parentName:"li"},"version")),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"Build Command")," as ",Object(o.b)("inlineCode",{parentName:"li"},"npm install && npm run build")),Object(o.b)("li",{parentName:"ol"},"Set the ",Object(o.b)("strong",{parentName:"li"},"Build Output Folder")," as ",Object(o.b)("inlineCode",{parentName:"li"},"/public/")," (NOTE: You must have the trailing slash at the moment)")),Object(o.b)("p",null,"You're now good to go! Click ",Object(o.b)("strong",{parentName:"p"},"Create Website"),". Now click ",Object(o.b)("strong",{parentName:"p"},"Build Latest Commit")),Object(o.b)("p",null,"... The build takes about 4 minutes. Once complete, Click ",Object(o.b)("strong",{parentName:"p"},"Add to Project")),Object(o.b)("p",null,"Follow the instruction to creating a new project. Once created, you can then click ",Object(o.b)("strong",{parentName:"p"},"Open")," on your Gatsby block and see it running live!"),Object(o.b)("h2",{id:"whats-next"},"What's Next?"),Object(o.b)("p",null,"You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/projects/environments"}),"Creating multiple environments")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.kintohub.com/docs/kintoblocks/websites#basic-auth-for-websites"}),"Setting a password to protect your work"))))}p.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);